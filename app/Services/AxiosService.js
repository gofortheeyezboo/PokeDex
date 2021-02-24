export const dndApi = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/spells",
  timeout: 10000
})