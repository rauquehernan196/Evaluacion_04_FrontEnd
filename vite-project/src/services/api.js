
const miUrlApi = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chile";


request(miUrlApi)
  .then(data => {
    console.log("Datos recibidos de la API:", data);
  })
  .catch(error => {
    console.error("Hubo un error al conectar con la API:", error);
  });