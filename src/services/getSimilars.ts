import { ListFilms } from "@/models";
import { API_KEY, BASE_URL } from "@/utilities";

const getSimilars = async (media_type: string, id: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${media_type}/${id}/similar?api_key=${API_KEY}&language=es-US-US&page=1`
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
export default getSimilars;
