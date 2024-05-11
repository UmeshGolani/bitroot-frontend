import axios from "axios"

export const fetchData = (url) => {
    axios.get(url)
    .then((res) => {
        return res.data;
    })
    .catch(err => console.error(err));
}