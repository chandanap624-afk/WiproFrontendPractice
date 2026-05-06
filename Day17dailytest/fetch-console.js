// Fetch API example - employees data

fetch("https://dummy.restapiexample.com/api/v1/employees")
  .then(response => response.json())   // JSON ga convert
  .then(data => {
    console.log("Full Response:", data);     // complete data
    console.log("Employees:", data.data);   // employees list
  })
  .catch(error => {
    console.log("Error:", error);
  });