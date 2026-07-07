

export const getChileanMeals = () => {
    const miUrlApi = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chile";


    return fetch(miUrlApi)
        .then(response => {
 
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }
            
            return response.json();
        });
};