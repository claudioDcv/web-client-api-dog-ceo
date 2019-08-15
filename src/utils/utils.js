export const objectMapper = obj => Object.keys(obj)
    /**
     * Funcion que permite convertir el objeto breeds en un Array
     * para permitir facilidad a la hora de generar la interfaz con los componentes
     * 
     * @author Claudio Rojas<claudio.dcv(a)gmail.com>
     * @since 1.0.0
     * @version 0.0.1
     * @param {Object} obj - Objeto retornado por servicio lista de razas
     * @returns {Array}
     */
export const breedObjectToArray = obj => objectMapper(obj).map(key => ({
    name: key,
    value: obj[key],
}));

export const concatArraysInObject = obj => {
    let outArray = [];
    objectMapper(obj).forEach(key => {
        outArray = outArray.concat(obj[key]);
    });
    return outArray;
}