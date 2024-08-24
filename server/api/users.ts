import axios from "axios";

export default eventHandler(async (event) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    data,
  };
});
