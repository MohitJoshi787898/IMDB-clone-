import axios from "axios";
const baseUrl ="https://api.themoviedb.org/3";
const TOKEN=import.meta.env.VITE_APP_TOKEN;
const headers ={
    Authorization:"bearer " + TOKEN
};
export const useFetchFromApi=async (url,params)=>{
    try {
        const {data}=await axios.get(`${baseUrl}${url}`,{headers,params})
        return data
    }
     catch (error) {
        console.log(error)
    }
}

