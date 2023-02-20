import { ListCast } from "@/models";
import { API_KEY, BASE_URL } from "@/utilities";

const getCredits = async (id:number, media_type:string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${media_type}/${id}/credits?api_key=${API_KEY}&language=es-US`
    );

    if (response.ok) {
      const result = await response.json();
      return result as ListCast;
    }else {
      throw new Error("Error en la petición");
    }
  } catch (err) {
    console.error(err);
  }
};
export default getCredits;
