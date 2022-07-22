import { Info } from "../service/info.mjs";

export const InfoController = (request, response) => {
  Info().then((result) => {
    response.send(result);
  });
};
