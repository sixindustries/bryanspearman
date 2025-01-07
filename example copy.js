
const getDataWithDotThen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if(success) {
        resolve({data: 'something from the server'});
      } else {
        reject(new Error(error));
      }
    }, 1000)
  });
};

getDataWithDotThen()
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.error(error);
  });

 const getDataWithAsync = async () => {
  try {
    const url = '/endpoint';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(e) {
    console.error(e);
  }
 }

 export default {
  getDataWithAsync
 }