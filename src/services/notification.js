import api from "./api.service"

export const getNotifications = async () => {
     return await api.get('/notifications');
}