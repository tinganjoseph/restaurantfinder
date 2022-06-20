import axios from "axios";
//creating axios instance
export default axios.create({
  baseURL: "http://localhost:3000/app/v1/restaurants",
});