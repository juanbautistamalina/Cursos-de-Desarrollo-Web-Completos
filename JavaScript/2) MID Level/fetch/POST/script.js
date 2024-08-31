let headers =  {
      method : "POST",
      body : JSON.stringify({"nombre" : "Juan Bautista","apellido" : "Malina"}),
      headers : {'Content-Type': 'application/json'}
  }
  
  peticion = fetch("https://reqres.in/api/users", headers)
      .then(res => res.json())
      .then(res => console.log(res))
  
  
  