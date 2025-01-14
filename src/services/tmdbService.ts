import { axiosTMDB } from "../helpers/axiosTMDB";


export const tmdbService = async () => {
    const apiResponse = await axiosTMDB.get(
        "search/movie?query=Jack+Reacher"
      );
      return apiResponse.data
}