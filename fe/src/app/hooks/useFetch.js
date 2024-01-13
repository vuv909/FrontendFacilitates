"use client";
import axios from 'axios'
import { useState } from 'react';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGoogle = async (response) => {
        setLoading(true);
        axios.post(url, {credential: response.credential })
            .then((response) => {
                const data = response.data;
                if (data?.user) {
                    localStorage.setItem("user", JSON.stringify(data?.user));
                    // window.location.reload();
                }

                throw new Error(data?.message || data);
            })
            .catch((error) => {
                setError(error?.message);
            })
    };
    return { loading, error, handleGoogle };
};

export default useFetch;