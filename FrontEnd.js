window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://azcloudfunctionapp.azurewebsites.net/api/HttpTrigger1?code=OrDF2X98oYhqiCe9CkzdbwmQ1cXVlWIKVpQog6WhjksKAzFuDhuddA==&clientId=blobs_extension'; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
  
