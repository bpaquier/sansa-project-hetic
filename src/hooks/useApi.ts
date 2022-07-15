/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useRef } from "react";

import axios from "axios";

export default function useApi() {
  const API_ENDPOINT = "https://sansah.vhswebs.com/api";
  const unmounted = useRef<boolean>(false);

  useEffect(() => {
    const source = axios?.CancelToken?.source();

    return () => {
      unmounted.current = true;
      source.cancel("clean up  cancelling");
    };
  }, []);

  const getOrgaByServices = async (services: string[]) => {
    return await axios
      .get(`${API_ENDPOINT}/getallorgaByService/${services?.join("~")}`)
      ?.then((resp) => resp)
      ?.catch((error) => error);
  };

  const getOrgaById = async (id: number /* , lang?: string */) => {
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

  const getServicesCount = async () => {
    return await axios
      ?.get(`${API_ENDPOINT}/getservice/count`)
      ?.then((resp) => resp)
      ?.catch((error) => error);
  };

  return {
    getOrgaById,
    getOrgaByNameOrAdress,
    getOrgaByServices,
    getServicesCount
  };
}
