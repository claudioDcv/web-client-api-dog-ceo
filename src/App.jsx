import React, { useState, useEffect } from 'react';
import './App.css';
import { Badge, Button } from 'reactstrap';

import { breedService } from './services/breedService';
import { imageService } from './services/imageService';
import Checkbox from './components/checkbox/Checkbox';

function App() {
    const [listClose, setListClose] = useState(true)
    const [breedList, setBreedList] = useState([])
    const [imageList, setImageList] = useState([])
    const [selectedBreedList, setSelectedBreedList] = useState([])

    const updateSelecedBreed = (name) => {
        return (event) => {
            setImageList([]);
            const c = event.target.checked;
            if (c) {
                selectedBreedList.push({
                    name,
                    value: breedList[name],
                })
                setSelectedBreedList(selectedBreedList.map(e => e))
                selectedBreedList.forEach(e => {
                    imageService.getByQuery(e.name).then(d => {
                        setImageList(im => im.concat(d));
                    })
                })
            } else {
                selectedBreedList.filter(e => e.name !== name).forEach(e => {
                    imageService.getByQuery(e.name).then(d => {
                        setImageList(im => im.concat(d));
                    })
                })
                setSelectedBreedList(selectedBreedList.filter(e => e.name !== name));
            }

        }
    }

    useEffect(() => {
        breedService.getAll().then(data => setBreedList(data));
    }, []);

    return (
        <div className="App">
            <div className={`${listClose ? "comp-list-close" : "comp-list-show"}`}>{
                breedList.map((breed, index) => (
                    <div key={index}>
                        <Checkbox
                            name={breed.name}
                            value={breed.name}
                            onChange={updateSelecedBreed}
                        />
                        <div className="comp-checkbox-children-container">
                            {breed.value.map((subBreed, subIndex) => (
                                <div key={subIndex}>
                                    <Checkbox
                                        name={subBreed}
                                        value={`${breed.name}/${subBreed}`}
                                        onChange={updateSelecedBreed}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }</div>
            <div>
                <div><Button color="primary" className="comp-responsive-filter-button" onClick={() => setListClose(!listClose)}>{listClose ? "Filtrar" : "Cerrar"}</Button></div>
                <div>{selectedBreedList.map((selectBreed, index) => (
                    <Badge color="info" className="mr-1" key={index}>{selectBreed.name}</Badge>
                ))}</div>
                <div className="card-columns">
                    {imageList.map((image, index) => (
                        <div key={index} className="card">
                            <img className="card-img-top" src={image} alt={image} />
                        </div>

                    ))}
                </div>
            </div>
        </div >
    );
}

export default App;