import { useState, useEffect } from 'react';

const useGetData = (url) => {
    const [mydata, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return mydata;
}

export default useGetData;