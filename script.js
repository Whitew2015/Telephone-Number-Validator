const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


const validNumber = () => {
    if (input.value === "") {
        alert("Please provide a number");
        return;
    }
}


const clearScreen = () => {
    result.innerText = "";
}


checkBtn.addEventListener("click", validNumber);

clearBtn.addEventListener("click", clearScreen);

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        validNumber();
    }
});