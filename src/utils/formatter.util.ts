
export const sortByCreatedDate = (array) => {
    return array.sort((a, b) => {
        let c = new Date(a.createdDate).getTime();
        let d = new Date(b.createdDate).getTime();
        return d - c;
    })
};