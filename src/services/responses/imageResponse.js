/**
 * Metodo que controla el acceso a la data solo si es ok la respuesta
 * de otro modo retorna un objeto vacio
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 * @param {Object} data - objecto response de la api
 * @returns {Object}
 */
export default data => {
    if (data.status === 'success') return data.message;
    return {};
};