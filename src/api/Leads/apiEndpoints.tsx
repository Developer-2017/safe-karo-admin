// Adventures API Endpoints
const API_ENDPOINT_HOST: string =
  process.env.REACT_APP_BCS_CLEP_ADMIN_API_ENDPOINT || "";

export const addAdventureEndpoint = () =>
  API_ENDPOINT_HOST.concat(`/admin/v1/adventures`);

export const editAdventureEndpoint = (adventureId: string) =>
  API_ENDPOINT_HOST.concat(`/admin/v1/adventures/${adventureId}`);