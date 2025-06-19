const display = document.getElementById("display");

// Define operators for easy checking
const operators = ["+", "-", "*", "/", "."];

// Add click event listener to all buttons
document.querySelectorAll("input[type=button]").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        const current = display.value;

        // Handle the clear operation (AC)
        if (value === "AC") {
            display.value = "";
            return;
        }

        // Handle delete last character (DE)
        if (value === "DE") {
            display.value = current.slice(0, -1);
            return;
        }

        // Handle calculation and equal button
        if (value === "=") {
            try {
                // Extra check: do not evaluate if ends with operator
                if (operators.includes(current.slice(-1))) {
                    alert("Expression can't end with an operator!");
                    return;
                }
                display.value = eval(current) || "0";
            } catch {
                alert("Invalid Expression");
                display.value = "";
            }
            return;
        }

        // Validate operator sequences:
        if (operators.includes(value)) {
            // Prevent operator at start
            if (current === "") {
                alert("Expression can't start with an operator!");
                return;
            }

            // Prevent two operators in a row
            if (operators.includes(current.slice(-1))) {
                alert("Can't have two operators in a row!");
                return;
            }
        }

        // Append the clicked value if valid
        display.value += value;
    });
});
