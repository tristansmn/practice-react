import axios from "axios";
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3" // pre configure the youtube api with URL with axios
});