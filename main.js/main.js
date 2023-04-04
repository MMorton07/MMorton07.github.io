window.addEventListener('DOMContentLoaded', (event) => {
    visitors();
});


const functionApi = 'https://azurefunctionappmm.azurewebsites.net/api/HttpTrigger1?code=1KSIgslz5jq-EaNZeOWYgsKXfNKbBjVj3wRY0IyvZ6buAzFu9PEEcA=='; 

const visitors = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response <br />document.getElementById('visitors').innerText = count;

    }).catch(function(error) {
        console.log(error);
      });
    return count;
}