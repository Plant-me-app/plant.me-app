import { IPlant } from "../constants/plant.interface"
import api from "./api.service"


export const createPlant = async (plant: IPlant) => {
   const result = await api.post('/plants', plant);
   return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(result);
      }, 500);
    });
}