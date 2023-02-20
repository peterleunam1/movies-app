import { Videos } from "@/models/videos";
import { API_KEY, BASE_URL } from "@/utilities";

const getVideos = async (media_type: string, id: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
    );

    if (response.ok) {
      const result = await response.json();
      return result as Videos
    }else {
      throw new Error("Error en la petición");
    }
  } catch (err) {
    console.error(err);
  }
};
export default getVideos;
