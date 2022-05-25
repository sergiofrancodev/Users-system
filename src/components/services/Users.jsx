import axios from "axios";

  export async function getUsers() {
   return await axios.get("https://users-crud1.herokuapp.com/users/");
  }
 
  