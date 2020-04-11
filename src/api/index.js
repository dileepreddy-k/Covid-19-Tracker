import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let url = URL;

    if (country) {
        url = `${URL}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch(err) {
        return err;
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);

        return data;
    } catch(err) {
        return err;
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${URL}/countries`);
        console.log(countries);
        return countries;
    } catch(err) {
        console.log(err);
    }
}

export default fetchData;