import Fetch from '../client/client';
import breedResponse from './responses/breedResponse';
import { breedObjectToArray } from '../utils/utils';

/**
 * Metodo asicrono que controla el llamado a endpoint listado de razas
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 * @returns {Promise}
 */
const getAll = async() => {
    let data = await Fetch.get('/breeds/list/all')
    return breedObjectToArray(breedResponse(data));
}

export const breedService = {
    getAll,
};