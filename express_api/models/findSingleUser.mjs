import { readFile } from "fs/promises";
const json = JSON.parse(
    await readFile(new URL("../test.json", import.meta.url))
);

const Users = json.Users;

export default function findSingleUser(userId) {
    const user = Users.filter(
        (user) => user.userId == userId
    );
    return user;
}
