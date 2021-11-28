import axios from "axios";

const dndAPI = axios.create({
    baseURL: 'https://api.open5e.com'
})

// axios.interceptors.request.use(request => {
//     console.log("Starting request", JSON.stringify(request, null, 2))
//     return request
// })

export const getSpells = (level, dndClass, spellPage) => {
    return dndAPI.get(`/spells/`, {
        params: {
            level_int__iexact: level,
            dnd_class__icontains: dndClass,
            page: spellPage,
        }
    }).then((res) => {
        
        return res.data
    })
}