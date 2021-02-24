// @ts-ignore
export const PokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 10000
})



// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/znasty/pokemon',
  timeout: 10000
})

