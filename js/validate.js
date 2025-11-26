// JavaScript function to be called on form submission
  
function validateForm() {
    let name = document.forms["myForm"]["username"].value;
    let email = document.forms["myForm"]["email"].value;

    if (name === "") {
        alert("Name must be filled out");
        return false; // prevent form submission
    }

    if (email === "") {
        alert("Email must be filled out");
        return false; // prevent form submission
    }

    alert("Form submitted successfully!");
    return true; // allow form submission
}
 
//function to change text colour
function changecolour() {
    document.getElementById("colour").style.color = "Red";
}
//function to copy text from one id to another
document.getElementById("id2").innerText = document.getElementById("id1").innerText;

// Example of using map and filter functions
        function runExample() {
            let numbers = [1, 2, 3, 4, 5];

            // Using map to square numbers
            let squares = numbers.map(function(num) {
                return num * num;
            });

            // Using filter to get even numbers
            let evens = numbers.filter(function(num) {
                return num % 2 === 0;
            });

            // Display results
            document.getElementById('mapResult').innerText = "Squares: " + squares;
            document.getElementById('filterResult').innerText = "Even Numbers: " + evens;
        }
    

