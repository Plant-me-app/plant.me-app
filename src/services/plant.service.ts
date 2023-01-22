import { IPlant } from "../constants/plant.interface"
import { TaskTypes } from "../constants/taskTypes.enum";
import api from "./api.service"

export const createPlant = async (plant: IPlant) => {
   const result = await api.post('/plants', plant);
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 500);
    });
}

export const getPlants = async () => {
    return await api.get('/plants');
}

export const deletePlant = async (id: any) => {
    const result = await api.delete(`/plants/${id}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 500);
    });
}

export const saveTaskHistory = async (id: number, task: TaskTypes) => {
    const result = await api.put(`/plants/${id}/task`, {task});
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 500)
    }) 
}