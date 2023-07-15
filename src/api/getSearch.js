import axios from 'axios';

export const getSearch = async (search) => {
    try {
        const result =
            await (await axios.get(`https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${search}`)).data.query
        return result
    }
    catch (error) {
        console.error(error.massage)

    }

} 
