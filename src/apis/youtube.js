import axios from "axios";
const KEY = "AIzaSyAgOII9fp5163JyjzGZnd4xNWV95wKIjJc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
