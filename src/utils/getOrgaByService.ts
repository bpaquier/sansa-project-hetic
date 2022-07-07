//import { Services } from "./getServices";

export default async function getOrgaByService() {
  return fetch(`https://reactnative.dev/movies.json`)
    .then((Response) => Response.json())
    .then((json) => {
      console.log(json);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return json;
    })
    .catch((error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.error(error?.message);
    });

  /*  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = await axios.get(
      `https://127.0.0.1:8001/api/getallorgaByService/a:2:%7Bi:0;s:7:%22Laverie%22;i:1;s:6:%22Douche%22;%7D`
    );
    console.log(res.data);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(error.message);
  } */
}
