import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function callApi(pokemon: string) {
  return await (
    await api.get(pokemon)
  ).data;
}
