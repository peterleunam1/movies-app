import { ListFilms } from "@/models";
import { API_KEY, BASE_URL } from "@/utilities";

const getTrendings = async (media_type: string, time_windows: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/${media_type}/${time_windows}?api_key=${API_KEY}&language=es-US`
    );

    if (response.ok) {
      const result = await response.json();
      return result as ListFilms;
    }else {
      throw new Error("Error en la petición");
    }
  } catch (err) {
    console.error(err);
  }
};
export default getTrendings;
