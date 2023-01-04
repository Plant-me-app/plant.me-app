import { IPlant } from "../constants/plant.interface"
import api from "./api.service"


export const createPlant = (plant: IPlant) => {
    console.log('plant', plant)
   return api.post('/plants', plant);
}
