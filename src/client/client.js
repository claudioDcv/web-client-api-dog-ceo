class Fetch {
    static API_HOST = process.env.REACT_APP_API_HOST;

    static async get(url) {
        let response = await fetch(`${Fetch.API_HOST}${url}`);
        let data = await response.json()
        return data;
    }
}

export default Fetch;