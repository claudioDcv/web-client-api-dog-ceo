import Fetch from '../client/client';
import imageResponse from './responses/imageResponse';

/**
 * Metodo asicrono que controla el llamado a endpoint de razas y sub razas
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 * @param {string} query - nombre de raza {breed} o subraza {breed/subbreed}
 * @returns {Promise}
 */
const getByQuery = async(query) => {
    let data = await Fetch.get(`/breed/${query}/images`)
    return imageResponse(data);
}

export const imageService = {
    getByQuery,
};