

class GetFromBD {

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Что-то пошло не так, статус код запроса - ${res.status}`)
        }
        return await res.json();
    }

    getAllCharcters = () => {
        return this.getResource(`https://rickandmortyapi.com/api/character/[5,7,9,11,13,15,826]`);
    }
}

export default GetFromBD;



// https://rickandmortyapi.com/documentation/#get-all-characters