//import axios from "axios";
const input = document.getElementById("search-input");
const search = document.getElementById("search-button");
const img = document.getElementById('img');
const animefacts = "Mzk3MTU0OTMyOTU4MTY3MDUx.MTcxNjM5ODA4OQ--.c395354176";

const url = "https://waifu.it/api/v4/angry";
const fetchData = async () => {
  try {
    const { data } = await axios.get(url, { headers: {
        Authorization: "Mzk3MTU0OTMyOTU4MTY3MDUx.MTcxNjM5ODA4OQ--.c395354176",
    } });
    return data;
} catch (err) {
    throw new Error(err.message);
}
};
search.addEventListener('click', () =>{
  fetchData();
})