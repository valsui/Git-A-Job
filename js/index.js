// const axios = require('axios');
import axios from 'axios';

    // let location = '';
export const fetchJob = function(){
     return axios.get('/jobs');
            // .then((response) => {
            //     console.log(response);
            // })
            // .catch((err) => console.log(err));
}
