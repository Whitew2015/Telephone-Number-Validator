const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


const validNumber = () => {
    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    }

    // regex variable for valid phone numbers
    const numberRegex = /^\d?\s?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/g;

    // check regex with user input and display if the number is valid
    if (numberRegex.test(input.value)) {
        result.textContent = `Valid US number: ${input.value}`;
    } else {
        result.textContent = `Invalid US number: ${input.value}`;
    }
}


checkBtn.addEventListener("click", validNumber);

// clear input field and texts 
clearBtn.addEventListener("click", () => {
    result.textContent = "";
    input.value = "";
});

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        validNumber();
    }
});