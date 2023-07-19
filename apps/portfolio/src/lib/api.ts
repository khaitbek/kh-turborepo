import axios from "axios";

export async function getPosts() {
  return await (
    await axios.get("https://jsonplaceholder.typicode.com/posts")
  ).data;
}
