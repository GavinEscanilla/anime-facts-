const searchinput = document.getElementById('search-input');
const searchbtn = document.getElementById('searchbtn');
const animefacts = "https://anime-facts-rest-api.herokuapp.com/api/v1";
const  fetchData = async () => {
    const err = 'Pokémon not found';
    try {
      const res = await fetch(animefacts);
      const data = await res.json();
      console.log('data');
    
    } catch (err) {
       console.log(err);
    }
    
  };
  fetchData();
  console.log('hello world')
  /*
  searchbtn.addEventListener('click', () => {
    fetchData(searchinput.value.toLowerCase().trim())
  });*/
  