
const getDataWithDotThen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if(success) {
        resolve({data: "some data fromt server"});
      } else {
        reject(new Error("data fetch failed", error));
      }
    }, 1000)
  })
};

getDataWithDotThen() 
  .then((result) => {
    console.log("data fetched successfully", result.data);
  })
  .catch((error) => {
    console.error("an error occurred", error)
  });

const getDataWithAsync = async () => {
  try {
    const response = await fetch('/endpoint');
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error(error);
  };
};

export default {
  getDataWithAsync
};