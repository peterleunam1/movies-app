import { Reviews } from "@/models";
import { API_KEY, BASE_URL } from "@/utilities";

const getReviews = async (media_type:string, id:number, language:string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${media_type}/${id}/reviews?api_key=${API_KEY}&language=${language}-US&page=1`
    );

    if (response.ok) {
      const result = await response.json();
      return result as Reviews;
    }else {
      throw new Error("Error en la petición");
    }
  } catch (err) {
    console.error(err);
  }
};
export default getReviews;
