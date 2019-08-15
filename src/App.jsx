import React, { Component } from 'react';
import './App.css';
import { Badge, Button, Row, Col } from 'reactstrap';

import { breedService } from './services/breedService';
import { imageService } from './services/imageService';
import Checkbox from './components/checkbox/Checkbox';
import ImageDisplay from './components/img-list/ImageList';
import { objectMapper } from './utils/utils';

/**
 * Componente principal donde esta montada la aplicacion
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breedList: [],
            objResponse: {},
            toggleNav: true,
        };
    }

    /**
     * Metodo por defecto llamado al momento de existir dentro del dom
     * todos los nodos construidos
     */
    componentDidMount() {
        breedService.getAll().then(breedList => this.setState({ breedList }));
    }

    /**
     * Metodo que genera logica para realizar llamados optiomos a la API segun raza
     * o sub raza seleccionada
     * @param {string} name - nombre de la raza o sub raza para relizar el llamado a la API
     */
    makeQuery = (name) => {
        const { objResponse } = this.state;
        objectMapper(objResponse).forEach(keyObjRes => {
            // solo realiza consulta en caso que array de raza o subraza este vacio
            // Esto permite realizar una consulta solo cuando no existe dentro
            // del objeto objReponse una llave con el nombre {name} que ingresa por parametro
            if (objResponse[keyObjRes].length === 0) {
                imageService.getByQuery(name).then(d => {
                    objResponse[keyObjRes] = d;
                    this.setState({ objResponse });
                })
            }
        });
    }

    /**
     * Metodo que envuelve la escucha del cambio de estado en checkbox
     * permite pasar el nombre a filtrar por los checkbox
     *
     * @param {string} name - nombre de la raza o sub raza a filtrar
     * @returns {Function} - function que maneja el cambio de estado en checkbox
     */
    updateSelecedBreed = (name) => {
        return event => this.handleSelectedBreed(event, name);
    }

    /**
     * Metodo que escucha el cambio de estado sobe los
     * checkbox de raza y subraza, para comenzar el flujo
     * de llamado a la API y pedir las imagenes de las razas
     * 
     * @param {HTMLElement} event - evento default al realizar click en checkbox
     * @param {string} name - nombre de la raza o sub raza a filtrar
     * @returns {undefined}
     */
    handleSelectedBreed = (event, name) => {
        const { checked } = event.target;
        this.setState(prevState => {
            if (checked) prevState.objResponse[name] = [];
            else delete prevState.objResponse[name];
            return prevState;
        }, () => this.makeQuery(name));
    }

    /**
     * Metodo que modifica la propiedad boleana toggleNav
     * para desplegar u ocultar la navegacion lateral
     * en dispositivos moviles
     * @returns {undefined}
     */
    handleToggleNav = () => {
        this.setState(prevState => ({
            ...prevState,
            toggleNav: !prevState.toggleNav,
        }));
    }

    render() {
        const { toggleNav, breedList, objResponse } = this.state;
        return (
            <div className="App">
                <ul className={toggleNav ? 'comp-list-close' : 'comp-list-show'}>{
                    breedList.map((breed, index) => (
                        <li key={index}>
                            <Checkbox
                                name={breed.name}
                                value={breed.name}
                                onChange={this.updateSelecedBreed}
                            />
                            <ul className="comp-checkbox-children-container">
                                {breed.value.map((subBreed, subIndex) => (
                                    <li key={subIndex}>
                                        <Checkbox
                                            name={subBreed}
                                            value={`${breed.name}/${subBreed}`}
                                            onChange={this.updateSelecedBreed}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))
                }</ul>
                <div>
                    <Row>
                        <Col xs={12}><h1>Listado de Razas y Sub Razas de Perros</h1></Col>
                        <Col xs={12}>
                            <Button
                                color="primary"
                                className="comp-responsive-filter-button"
                                onClick={this.handleToggleNav}
                            >{toggleNav ? "Filtrar" : "Cerrar"}</Button>
                        </Col>
                        <Col xs={12}>{objectMapper(objResponse).map((breed, index) => (
                            <Badge color="info" className="mr-1" key={index}>{breed}</Badge>
                        ))}</Col>
                        <Col xs={12}>
                            <ImageDisplay data={objResponse} />
                        </Col>
                    </Row>
                </div>
            </div >
        );
    }

}
export default App;