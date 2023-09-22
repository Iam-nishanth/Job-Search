import axios from "axios";
import { useState, useEffect } from "react";
// import { RAPID_API_KEY } from '@env'

// const rapidAPIKey = RAPID_API_KEY

const useFetch = ({ endpoint, query }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const axios = require('axios');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'X-RapidAPI-Key': "849d0f72a5mshbaf41eebc332ee4p116fb7jsnda38fd53a149",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);
        }
        catch (error) {
            setError(true);
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return {
        data,
        loading,
        error,
        refetch
    }
}

export default useFetch 