// GET
peticion = axios("https://pokeapi.co/api/v2/pokemon/ditto")
peticion
    .then(res => console.log(res.data));

    
// POST
peticion = axios.post("https://reqres.in/api/users", {"nombre" : "juan"})
peticion
    .then(res => console.log(res.data))