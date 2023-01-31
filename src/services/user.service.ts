import api from "./api.service"

const user = {
    name: "Alex Gomes",
    email: "alex.gomes@email.com"
}
export const loadUser = async () => {
    return await api.post('/users', user);
}