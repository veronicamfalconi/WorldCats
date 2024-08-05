export const fetchRazas = async() => {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds'
    const APY_KEY = 'live_4nPRiI59hQyHWF0vSRDKYlyL7T7hNF4M2czdfkDPtWNzRDR8WURiSpi3mAbq58jT'
    try{
        const response = await fetch(BASE_URL)
        const data = await response.json()
        return data;
    }catch(error){
        console.error('Error fetch data', error)
        throw error

    }
}