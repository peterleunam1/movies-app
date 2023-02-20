import { Flatrate } from "@/models";
import { API_KEY, BASE_URL } from "@/utilities";

const getProviders = async (media_type: string, id: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${media_type}/${id}/watch/providers?api_key=${API_KEY}`
    );

    if (response.ok) {
      const data = await response.json();

      const { results } = data;
      return results["CO"].flatrate as Flatrate[] || [];
    }else {
      throw new Error("Error en la petición");
    }
  } catch (err) {
    console.error(err);
  }
};
export default getProviders;
