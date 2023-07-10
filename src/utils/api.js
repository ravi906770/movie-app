import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWE5ZDg5NmQ2ZDExZDBlZTc3MzM2ZDBhYjNjMzdmYyIsInN1YiI6IjY0YTk2MDBhYjY4NmI5MDBhZjlkODEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QnblamknlbKiH68dFK6KD3pQ3TwmdzIJ8iRJmGUSFR0"

const headers = {
    Authorization : "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url , params) =>{
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}