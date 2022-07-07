/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";

export async function getOrgaByServices(services: string[]) {
  return await axios
    .get(
      `http://sansah.vhswebs.com/api/getallorgaByService/${services?.join("~")}`
    )
    ?.then((resp) => resp)
    ?.catch((error) => error);
}

export async function getOrgaById(id: number) {
  return await axios
    .get(`http://sansah.vhswebs.com/api/getorgabyid/${id}`)
    ?.then((resp) => resp)
    ?.catch((error) => error);
}
