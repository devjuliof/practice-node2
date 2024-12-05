import {Api404Error} from "./apiErrors/api404Error";

const user = null;
if (user === null) {
    throw new Api404Error(`User not found`)
}