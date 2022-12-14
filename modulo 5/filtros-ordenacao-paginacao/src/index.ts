import { app } from "./app";
import selectAllUsers from "./endpoints/selectAllusers";

app.get("/users", selectAllUsers)

app.get("/users/:type", selectAllUsers)