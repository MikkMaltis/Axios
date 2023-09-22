import axios from "axios";

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('https://weatherapi-com.p.rapidapi.com/current.json').then(response => {
        console.log(response);
    })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);