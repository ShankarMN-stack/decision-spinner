const options = [];

const optionInput = document.getElementById("optionInput");
const addButton = document.getElementById("addButton");
const decideButton = document.getElementById("decideButton");
const optionList = document.getElementById("optionList");
const result = document.getElementById("result");

function addOption() {
    const option = optionInput.value.trim();

    if (option === "") return;

    options.push(option);

    const listItem = document.createElement("li");
    listItem.textContent = option;
    optionList.appendChild(listItem);

    optionInput.value = "";
    result.textContent = "";
}

function makeDecision() {
    if (options.length < 2) {
        result.textContent = "Add at least two options!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    result.textContent = `You should choose: ${options[randomIndex]} 🎉`;
}

addButton.addEventListener("click", addOption);
decideButton.addEventListener("click", makeDecision);

optionInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addOption();
    }
});