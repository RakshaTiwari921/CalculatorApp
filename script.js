const display = document.getElementById("display");

// Add click event listener to all buttons
document.querySelectorAll("input[type=button]").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        // Handle the clear operation (AC)
        if (value === "AC") {
            display.value = "";
            return;
        }

        // Handle delete last character (DE)
        if (value === "DE") {
            display.value = display.value.slice(0, -1);
            return;
        }

        // Handle calculation and equal button
        if (value === "=") {
            try {
                display.value = eval(display.value) || "0";
            } catch {
                alert("Invalid Expression");
                display.value = "";
            }
            return;
        }

        // Append the clicked button value to the display
        display.value += value;
    });
});
