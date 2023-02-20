import { ListFilms, OneFilm } from "@/models";
import { API_KEY, BASE_URL } from "@/utilities";

const getOneFilm = async ({ media_type, query }: OneFilm) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/${media_type}?api_key=${API_KEY}&language=es-US&query=${query}&page=1&include_adult=false`
    );

    if (response.ok) {
      const result = await response.json();
      return result as ListFilms;
    } else {
      throw new Error("Error en la petición");
    }
  } catch (err) {
    console.error(err);
  }
};
export default getOneFilm;
