// {{HOST}}/api/breed/hound/afghan/images

import Fetch from '../client/client';
import imageResponse from './responses/imageResponse';
// import { breedObjectToArray } from '../utils/utils';

const getByQuery = async(query) => {
    let data = await Fetch.get(`/breed/${query}/images`)
    return imageResponse(data);
}

export const imageService = {
    getByQuery,
};