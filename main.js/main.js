window.addEventListener('DOMContentLoaded', (event) => {
    visitors();
});


const functionApi = 'https://azurefunctionappmm.azurewebsites.net/api/HttpTrigger1?code=1KSIgslz5jq-EaNZeOWYgsKXfNKbBjVj3wRY0IyvZ6buAzFu9PEEcA=='; 

const visitors = () => {
    let count = 30;
    fetch(functionApi)
      .then(response => response.json())
      .then(data => {
        console.log("Website called function API.");
        count = data.count;
        document.getElementById('visitors').textContent = count;
      })
      .catch(error => {
        console.log(error);
      });
    return count;
  };
  