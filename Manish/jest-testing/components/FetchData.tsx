import axios from 'axios';

const fetchData = () => {
    return axios.get('https://reqres.in/api/users')
        .then(res => {
            return res.data.email
        })
        .catch(err => {
            console.log(err)
        })
};

export default fetchData;