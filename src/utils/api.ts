/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";

const API_ENDPOINT = "http://sansah.vhswebs.com/api";

export async function getOrgaByServices(services: string[]) {
  return await axios
    .get(`${API_ENDPOINT}/getallorgaByService/${services?.join("~")}`)
    ?.then((resp) => resp)
    ?.catch((error) => error);
}

export async function getOrgaById(id: number) {
  return await axios
    .get(`${API_ENDPOINT}/getorgabyid/${id}`)
    ?.then((resp) => resp)
    ?.catch((error) => error);
}
