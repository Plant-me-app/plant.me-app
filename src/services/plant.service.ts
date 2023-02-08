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

export const updatePlant = async (plant: IPlant, id: string) => {
    const result = await api.put(`/plants/${id}`, plant);
    return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(result);
         }, 500);
     });
 }

export const getPlants = async () => {
    return await api.get('/plants');
}

export const deletePlant = async (id: string) => {
    const result = await api.delete(`/plants/${id}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 500);
    });
}

export const getPlantById = async (id: string) => {
    return await api.get(`/plants/${id}`)
}

export const saveTaskHistory = async (id: number, task: TaskTypes) => {
    const result = await api.put(`/plants/${id}/task`, {task});
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 500)
    }) 
}

export const deleteTaskHistory = async (id: number, task: TaskTypes) => {
    const result = await api.put(`/plants/${id}/task`, {task, toRemove: true});
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 500)
    }) 
}

export const getTaskButtonEnabled = async (id: number) => {
    return await api.get(`/plants/${id}/task/enable`);
}

export const updatePlantScore = async (id: number, toRemove: boolean) => {
    return await api.put(`/plants/${id}/score`, {toRemove});
}

export const getPlantScore = async (id: number) => {
    return await api.get(`/plants/${id}/score`);   
}

export const getPlantHistory = async (id: number) => {
    return await api.get(`/plants/${id}/history`);
}