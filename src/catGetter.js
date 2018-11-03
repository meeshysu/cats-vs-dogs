import axios from 'axios';

// const getCats = () => new Promise((resolve, reject) => {
//   axios.get('https://random-dogs-api.herokuapp.com/cats/15')
//     .then((data) => {
//       resolve(data);
//     })
//     .catch((err) => {
//       reject(err);
//     });
// }); THIS IS THE LONGER WAY OF DOING THE REQUEST. BELOW IS THE SHORT WAY!

const getCats = () => axios.get('https://random-dogs-api.herokuapp.com/cats/15');


export default { getCats };
