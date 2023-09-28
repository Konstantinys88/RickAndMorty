

const GetFromBD = () => {

    const _apiKey = `https://rickandmortyapi.com/api/character/`

    /**
     * Функция отправляет запрос на сервер, возвращает обьект в форматек json.
     */
    const getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Что-то пошло не так, статус код запроса - ${res.status}`)
        }
        return await res.json();
    }

    /**
     * Функция возвращает одного персонажа
     */
    const getCharacters = async (number) => {
        const res = await getResource(`${_apiKey}${number}`);
        return transformCharacters(res);
    }

    /**
     * Функция принимает числовой массив типа [1, 2, 3, 4, 5, 6, 7, 8, 826] не более 20 значений
     * Функция возвращает набор персонажей
     */
    const getAllCharcters = async (arr) => {
        const arrRes = arr.join(',');
        const res = await getResource(`${_apiKey}[${arrRes}]`);
        return res.map(transformCharacters);
    }

    /**
    * Для преобразования данных в обьект
    */
    const transformCharacters = (res) => {
        return {
            id: res.id,
            name: res.name,
            status: res.status,
            species: res.species,
            gender: res.gender,
            origin: res.origin.name,
            image: res.image,
        }
    }

    return {
        getAllCharcters,
        getCharacters,
    }
}

export default GetFromBD;



// https://rickandmortyapi.com/documentation/#get-all-characters
// Всего 826 персонажей
// цветовая палитра
// https://colorswall.com/palette/23454