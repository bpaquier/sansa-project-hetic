/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";

import serializeArray from "./serializeArraytoQS";

export async function getOrgaByServices(services: string[]) {
  const args = serializeArray(services);

  return await axios
    .get(`http://sansah.vhswebs.com/api/getallorgaByService/${args}`)
    ?.then((resp) => resp)
    ?.catch((error) => error);
}
