"use client";
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter()
    const handleGoogle = async (response) => {
        setLoading(true);
        axios.post(url, { credential: response.credential })
            .then((response) => {
                const data = response.data;
                if (data?.user) {
                    localStorage.setItem("user", JSON.stringify(data?.user));
                    console.log('====================================');
                    console.log("user::", data?.user);
                    console.log('====================================');
                    router.push('/')
                }

                // throw new Error(data?.message || data);
            })
            .catch((error) => {
                setError(error?.message);
            })
    };
    return { loading, error, handleGoogle, setError };
};

export default useFetch;