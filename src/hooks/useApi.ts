/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";

export default function useApi() {
  const API_ENDPOINT = "http://sansah.vhswebs.com/api";

  const getOrgaByServices = async (services: string[]) => {
    return await axios
      .get(`${API_ENDPOINT}/getallorgaByService/${services?.join("~")}`)
      ?.then((resp) => resp)
      ?.catch((error) => error);
  };

  const getOrgaById = async (id: number) => {
    return await axios
      .get(`${API_ENDPOINT}/getorgabyid/${id}`)
      ?.then((resp) => resp)
      ?.catch((error) => error);
  };

  const getOrgaByNameOrAdress = async (arg: string) => {
    return await axios
      ?.get(`${API_ENDPOINT}/getorgaNameAdress/${arg}`)
      ?.then((resp) => resp)
      ?.catch((error) => error);
  };

  return { getOrgaById, getOrgaByNameOrAdress, getOrgaByServices };
}
