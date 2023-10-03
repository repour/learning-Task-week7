import './style.css'
const apiUrl = prompt("please enter your url")
function fetchData(url) {
    return new Promise((resolve, reject) => {
  
      // Create a timeout to reject the promise if it takes too long
      const timeoutId = setTimeout(() => {
        reject(new Error("Request timed out"));
      }, 5000);
  
      fetch(url)
        .then((response) => {
          clearTimeout(timeoutId); // Clear the timeout since the request completed
          if (response.status === 200) {
            return response.json();
          } else {
            reject(new Error(`Failed to fetch data. Status: ${response.status}`));
          }
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
    
  fetchData(apiUrl)
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });