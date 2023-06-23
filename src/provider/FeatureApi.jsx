import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function FeatureApi() {
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(false);
    let isMounted = useRef(false);

    useEffect(() => {
        try {
            if (isMounted.current) {
                setLoading(true);
                const getFeatures = async () => {
                    const response = await axios.get(`${import.meta.env.VITE_API_BASE}/spaceship/service/list`);
                    setFeatures(response?.data?.data ? response.data.data : []);
                }
                getFeatures();
                setLoading(false);
            } else {
                isMounted.current = true;
            }
        } catch (err) {
            alert(err.response.data.msg)
        }
    }, [])
    return {
        features: [features, setFeatures],
        loading: [loading, setLoading]
    }
}

export default FeatureApi;
