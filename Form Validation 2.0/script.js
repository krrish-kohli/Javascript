// Use the DOM method `.getElementById()` to find your form
const form = document.getElementById("myForm");
// 
const validateForm = (event) => {
    // Get the form elements
    let elements = document.getElementById("myForm").elements;

    // Create your for loop
    for (let i = 0; i < elements.length; i++) {
        console.log("This is the value of i: " + i);

        if (elements[i].value === "") {
            let field = elements[i].getAttribute("name");
            console.log("This input is empty!");
        } else {
            console.log("This input has some data");
            console.log(elements[i].value);
        }
    }
    event.preventDefault();
}
  
// Add the an event listener to validate your form
form.addEventListener('submit', validateForm);
