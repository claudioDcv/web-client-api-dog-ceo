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
    const [listFilterName, setListFilterName] = useState([])

    const updateSelecedBreed = (name) => {
        return (event) => {
            
            const c = event.target.checked;
            if (c) {
                selectedBreedList.push(name)
                setSelectedBreedList(selectedBreedList.map(e => e))
                selectedBreedList.forEach(name => {
                    console.log('search->' + name, listFilterName);
                    // solo buscar si es que no existe dentro de lo ya buscado
                    if (listFilterName.every(search => search !== name )) {
                        
                        imageService.getByQuery(name).then(d => {
                            setImageList(im => im.concat(d));
                            // se agrega a la lista de elementos consumidos
                            // el elemento recien consultado
                            // mejora performance del servicio
                            setListFilterName(e => {
                                e.push(name)
                                return e;
                            })
                        })
                    }
                })
            } else {
                setImageList([])
                // se elimina de la lista de servicios consumidos
                // el elemento eliminado
                // mejora merformance del servicio
                setListFilterName([])
                console.log(selectedBreedList)
                selectedBreedList.filter(inName => inName !== name).forEach(filterName => {
                    imageService.getByQuery(filterName).then(d => {
                        setImageList(im => im.concat(d));
                    })
                })
                setSelectedBreedList(selectedBreedList.filter(inName => inName !== name));
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
                    <Badge color="info" className="mr-1" key={index}>{selectBreed}</Badge>
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