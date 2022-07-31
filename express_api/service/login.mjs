import db from "../models/index.mjs";

export const login = async (username, password) => {
  let answer = await db.Users.findAll({
    where: {
      username: username,
      password: password,
    },
  });
  return { login: answer.length > 0 };
};
