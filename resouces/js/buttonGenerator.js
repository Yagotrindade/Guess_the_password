document.addEventListener("DOMContentLoaded", () => {
    const radioContainer = document.getElementById("radioContainer");
    const numGroups = 10; // Quantidade de grupos (dígitos da senha)
    const numOptions = 10; // Números de 0 a 9

    for (let i = 0; i < numGroups; i++) {
        let groupDiv = document.createElement("div");

        for (let j = 0; j < numOptions; j++) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `group${i}`;
            radio.value = j;
            groupDiv.appendChild(radio);
        }

        radioContainer.appendChild(groupDiv);
    }
});