
//const input = document.getElementById("search-input");
const search = document.getElementById("search-button");
const img = document.getElementById('img');
const url = "https://waifu.it/api/v4/angry"; 
/*
Replace "Your-API-Token" with the token you got from the Kohai Bot and the endpoint.
*/

const fetchData = async () => {
    const err = "no data";
    try {
      const res = await fetch(url, { headers: {
            Authorization: "Mzk3MTU0OTMyOTU4MTY3MDUx.MTcxNjM5ODA4OQ--.c395354176",
        } });
        const data = await res.json();
        img.src=data.url;
    } catch (err) {
        console.log(err);
    }
};
 fetchData();
 console.log(11+11);
 search.addEventListener('click',() =>{
    fetchData();
 })