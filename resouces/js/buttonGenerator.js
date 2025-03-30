document.addEventListener("DOMContentLoaded", () => {
    const radioContainer = document.getElementById("radioContainer");
    radioContainer.style.display = "grid";
    radioContainer.style.gridTemplateColumns = "repeat(8, 1fr)";
    radioContainer.style.width = "fit-content";
    radioContainer.style.border = "2px solid black";

    const correctCombination = ["0-2", "1-4", "2-1", "3-5", "4-0", "5-4", "6-3", "7-6", "1-7", "4-7"];
    let selectedValues = new Set();

    function createChessboard() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let radioWrapper = document.createElement("label");
                radioWrapper.style.display = "inline-block";
                radioWrapper.style.width = "12vw";
                radioWrapper.style.height = "12vw";
                radioWrapper.style.maxWidth = "40px";
                radioWrapper.style.maxHeight = "40px";
                radioWrapper.style.position = "relative";
                radioWrapper.style.backgroundColor = (i + j) % 2 === 0 ? "#f5deb3" : "#000";
                radioWrapper.style.border = "1px solid black";
    
                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = `${i}-${j}`;
                checkbox.style.opacity = "0";
                checkbox.style.width = "100%";
                checkbox.style.height = "100%";
                checkbox.style.position = "absolute";
                checkbox.style.cursor = "pointer";
    
                let checkmark = document.createElement("div");
                checkmark.style.position = "absolute";
                checkmark.style.top = "50%";
                checkmark.style.left = "50%";
                checkmark.style.transform = "translate(-50%, -50%)";
                checkmark.style.fontSize = "2vw";
                checkmark.style.maxFontSize = "24px";
                checkmark.style.color = (i + j) % 2 === 0 ? "black" : "white";
                checkmark.innerHTML = "X";
                checkmark.style.display = "none";
    
                checkbox.addEventListener("change", () => {
                    if (checkbox.checked) {
                        selectedValues.add(checkbox.value);
                        checkmark.style.display = "block";
                    } else {
                        selectedValues.delete(checkbox.value);
                        checkmark.style.display = "none";
                    }
                });
    
                radioWrapper.appendChild(checkbox);
                radioWrapper.appendChild(checkmark);
                radioContainer.appendChild(radioWrapper);
            }
        }
    }
    
    function createVerifyButton() {
        const verifyButton = document.getElementById("verify");
        verifyButton.addEventListener("click", () => {
            if (
                selectedValues.size === correctCombination.length &&
                correctCombination.every(val => selectedValues.has(val))
            ) {
                window.location.href = 'sucesso.html';
            } else {
                alert("Incorrect Combination. Try Again!");
            }
        });
    
        document.body.appendChild(verifyButton);
    }
    
    createChessboard();
    createVerifyButton();
    
    window.addEventListener("resize", () => {
        document.querySelectorAll("label").forEach(label => {
            label.style.width = "12vw";
            label.style.height = "12vw";
            label.style.maxWidth = "40px";
            label.style.maxHeight = "40px";
        });
    });
});