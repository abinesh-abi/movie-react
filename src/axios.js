import axios from "axios";
import { baseUrtl } from "./constants/constants";

const instance = axios.create({
  baseURL: baseUrtl
});
export default instance