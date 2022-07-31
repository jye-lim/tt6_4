import { login } from "../service/login.mjs";

export const Login = (request, response) => {
  login(request.body.username, request.body.password).then((result) => {
    response.send(result);
  });
};
