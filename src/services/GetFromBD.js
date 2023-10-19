import { useHttp } from '../hooks/http.hook'

const GetFromBD = () => {

    const { loading, request, error } = useHttp();

    const _apiKey = `https://rickandmortyapi.com/api/character/`;

    /**
     * Функция отправляет запрос на сервер, возвращает обьект в форматек json.
     */
    // const getResource = async (url) => {
    //     let res = await fetch(url);
    //     if (!res.ok) {
    //         throw new Error(`Что-то пошло не так, статус код запроса - ${res.status}`)
    //     }
    //     return await res.json();
    // }

    //Теперь вместо getResourse используется request из http.hook

    /**
     * Функция возвращает одного персонажа
     */
    const getCharacters = async (number) => {
        // const res = await getResource(`${_apiKey}${number}`);
        const res = await request(`${_apiKey}${number}`);
        return transformCharacters(res);
    }

    /**
     * Функция принимает числовой массив типа [1, 2, 3, 4, 5, 6, 7, 8, 826] 
     * Функция возвращает набор персонажей
     */
    const getAllCharcters = async (arr) => {
        const arrRes = arr.join(',');
        // const res = await getResource(`${_apiKey}[${arrRes}]`);
        const res = await request(`${_apiKey}[${arrRes}]`);
        return res.map(transformCharacters);
    }

    /**
     * Функция принимает числовой массив типа [1, 2, 3, 4, 5, 6, 7, 8, 826] 
     * Функция возвращает набор локаций
     */
    const getAllLocation = async (arr) => {
        const arrRes = arr.join(',');
        // const res = await getResource(`https://rickandmortyapi.com/api/location/[${arrRes}]`);
        const res = await request(`https://rickandmortyapi.com/api/location/[${arrRes}]`);
        return res.map(transformLocation);
    }

    /**
     * Функция принимает числовой массив типа [1, 2, 3, 4, 5, 6, 7, 8, 826] 
     * Функция возвращает набор локаций
     */
    const getAllEpisode = async (arr) => {
        const arrRes = arr.join(',');
        // const res = await getResource(`https://rickandmortyapi.com/api/episode/[${arrRes}]`);
        const res = await request(`https://rickandmortyapi.com/api/episode/[${arrRes}]`);
        return res.map(transformEpisode);
    }


    /**
     * Принимает строку с именем персонажа и возвращает массив обьектов результатов поиска
     */
    const getSearcCharacters = async (name) => {
        // const res = await getResource(`${_apiKey}?name=${name}`);
        const res = await request(`${_apiKey}?name=${name}`);
        return res.results.map(transformCharacters);
    }


    /**
    * Для преобразования данных о персонажах в обьект
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
            episode: res.episode.map(item => item.slice(40)),
        }
    }

    const transformLocation = (res) => {
        return {
            id: res.id,
            name: res.name,
            type: res.type,
            dimension: res.dimension,

            characters: res.residents.map(item => item.slice(42)),
        }
    }

    const transformEpisode = (res) => {
        return {
            id: res.id,
            name: res.name,
            airDate: res.air_date,
            episode: res.episode,
            residentsId: res.characters.map(item => item.slice(42)),
        }
    }


    return {
        loading,
        error,
        getAllCharcters,
        getCharacters,
        getSearcCharacters,
        getAllLocation,
        getAllEpisode,
    }
}

export default GetFromBD;


