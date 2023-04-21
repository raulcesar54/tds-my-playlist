import axios from 'axios'

export const weatherApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_WEATHER_API_ROUTE,
    params: {
        appid: process.env.NEXT_PUBLIC_APP_ID
    }
})
export const shazamApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SHAZAM_API_ROUTE,
    headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_X_API_KEY,
    },
    params: {
        'x-rapidapi-host': process.env.NEXT_PUBLIC_SHAZAM_X_RAPID_HOST,
    }
})