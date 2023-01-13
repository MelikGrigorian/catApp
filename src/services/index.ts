import { ICatsData, IBreeds } from "./../store/slices/CatsSlice/types";
import { AxiosPromise } from "axios";
import axios from "../configs/axios";

export const getBreedsByLimit = (limit: number = 15): AxiosPromise<IBreeds[]> =>
  axios.get(`/breeds?limit=${limit}`);

export const getImagesByBreed = (
  breedID: string,
  limit: number = 10
): AxiosPromise<ICatsData[]> =>
  axios.get(`/images/search?limit=${limit}&breed_ids=${breedID}`);
