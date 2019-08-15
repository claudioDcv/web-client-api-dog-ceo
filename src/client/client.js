/**
 * Clase que abstrae funcionalidad llamado a api
 * esta clase permite, modificar la implementacion de llamado
 * ejemplo: cambiar fetch a axios, request o XmlHttpRequest
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 */
class Fetch {

    /**
     * {string} - toma desde env vars la uri base de la API
     */
    static API_HOST = process.env.REACT_APP_API_HOST;

    /**
     * Metodo asincrono wrapper de llamado por verbo GET
     * @async
     * @function get
     * @param {string} url - url del servicio, se contatena con la API base
     * @returns {Promise} al ser correcta la promesa, retorna data desde la API
     */
    static async get(url) {
        let response = await fetch(`${Fetch.API_HOST}${url}`);
        let data = await response.json()
        return data;
    }
}

export default Fetch;