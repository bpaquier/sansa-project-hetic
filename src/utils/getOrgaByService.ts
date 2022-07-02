//import { Services } from "./getServices";

import axios from "axios";

export default async function getOrgaByService() {
  /*   console.log("2");
  return fetch(
    `http://192.168.1.37/api/getallorgaByService/a:2:{i:0;s:7:"Laverie";i:1;s:6:"Douche";}`
  )
    .then((Response) => Response.json())
    .then((json) => {
      console.log(json);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return json;
    })
    .catch((error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.error(error?.message);
    }); */

  try {
    const res = await axios.get(
      `http://192.168.1.37:8001/api/getallorgaByService/a:2:%7Bi:0;s:7:"Laverie";i:1;s:6:"Douche";%7D`
    );
    console.log(res.data);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(error.message);
  }
}
