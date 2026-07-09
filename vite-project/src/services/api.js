const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chile";

export const getMenuChileno = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error en la red");
    
    const { meals } = await res.json();
    return meals || [];
  } catch (err) {
    console.error("Fallo al conectar con la API:", err);
    throw err;
  }
};