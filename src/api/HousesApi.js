
class HousesApi {
    static getAllHouses() {
        return fetch('https://anapioficeandfire.com/api/houses').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default HousesApi;
