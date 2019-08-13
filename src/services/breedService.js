import Fetch from '../client/client';
import breedResponse from './responses/breedResponse';
import { breedObjectToArray } from '../utils/utils';

const getAll = async() => {
    let data = await Fetch.get('/breeds/list/all')
    return breedObjectToArray(breedResponse(data));
}

export const breedService = {
    getAll,
};