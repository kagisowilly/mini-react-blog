import { useState, useEffect } from "react";

const useFetch =(url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();

        async function getData(){
            try{
        let res = await fetch(url, {signal: abortCont.signal});
        if(!res.ok){
            throw Error("Could not fetch dataaaaaaa")
        }else{
        let data = await res.json();
        setData(data);
        setIsPending(false);
            }               
            }catch(err){
                if(err.name === 'AbortError')
                {
                    console.log(' Fetch aborted')
                }else{
                setIsPending(false);
                setError(err.message)                    
                }
            }
        }
        getData();
        return () => abortCont.abort();
}, [url]);

    return {data, isPending, error}
}

export default useFetch;