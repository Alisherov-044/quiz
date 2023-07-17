import axios from "axios";
import { baseUrl } from "@/utils/urls";
import { useEffect, useState } from "react";

export function useAxios(url, dep = []) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(url) {
            setLoading(true)
            axios
                .get(`${baseUrl}/${url}`)
                .then(res => setResponse(res.data))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, dep)

    return { response, loading }
}