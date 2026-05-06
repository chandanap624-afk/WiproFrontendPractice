// Fetch API example

fetch("https://dummy.restapiexample.com/api/v1/employees")
  .then(response => response.json())   // convert to JSON
  .then(data => {
    console.log("Employees Data:", data);  // print in console
  })
  .catch(error => {
    console.log("Error:", error);
  });