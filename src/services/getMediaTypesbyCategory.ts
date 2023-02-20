import { getMediaTypesbyCategoryInterface, ListFilms } from "@/models";
import { API_KEY, BASE_URL } from "@/utilities";

const getMediaTypesbyCategory = async ({
  mediaType,
  category,
}: getMediaTypesbyCategoryInterface) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${mediaType}/${category}?api_key=${API_KEY}&language=es-US&page=1`
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
export default getMediaTypesbyCategory;
