window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
  
  const functionApi = 'https://azcloudfunctionapp.azurewebsites.net/api/HttpTrigger1?code=OrDF2X98oYhqiCe9CkzdbwmQ1cXVlWIKVpQog6WhjksKAzFuDhuddA==&clientId=blobs_extension';
  
  const getVisitCount = () => {
    let count = 7;
    fetch(functionApi)
      .then(response => {
        return response.json()
      })
      .then(response => {
        count = response;
        console.log("Hello 👋, you are visitor number - " + count);
        document.getElementById('counter').innerText = count;
      }).catch(function (error) {
        console.log(error);
      });
    return count;
  }
  
