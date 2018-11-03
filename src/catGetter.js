import axios from 'axios';

// THIS LONG WAY IS IF YOU WANT TO CLEAN OR MANIPULATE SOME DATA FIRST!
// const getCats = () => new Promise((resolve, reject) => {
//   axios.get('https://random-dogs-api.herokuapp.com/cats/15')
//     .then((data) => {
//       const cleanData = data.data.cats;
//       resolve(cleanData);
//     })
//     .catch((err) => {
//       reject(err);
//     });
// }); THIS IS THE LONGER WAY OF DOING THE REQUEST. BELOW IS THE SHORT WAY!

const getCats = () => axios.get('https://random-dogs-api.herokuapp.com/cats/15');


export default { getCats };
