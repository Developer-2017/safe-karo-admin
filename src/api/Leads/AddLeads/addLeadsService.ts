// import addAdventureAPI from "./addAdventureAPI";
// import { convertIAdventureFormToIAdventureAddEditAPI } from "../convertIAdventureFormToIAdventureAddEditAPI";
// import { AddAdventureProps } from "../getAdventuresTypes";

// const addAdventureService = async ({
//   header,
//   adventure,
// }: AddAdventureProps) => {
//   return addAdventureAPI({
//     header: header,
//     adventure: convertIAdventureFormToIAdventureAddEditAPI(adventure),
//   })
//     .then((newAdventure) => {
//       return newAdventure;
//     })
//     .catch((response) => {
//       console.error(
//         `addAdventureAPI failed with http status = ${response.status}`
//       );
//       return Promise.reject(response);
//     });
// };

// export default addAdventureService;
