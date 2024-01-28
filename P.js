 document.getElementById("registration-form").addEventListener("submit", function (event) {
            // Form validation logic
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            let isValid = true;

            // Check if username is empty
            if (username.trim() === "") {
                document.getElementById("username-error").textContent = "Username cannot be empty";
                isValid = false;
            } else {
                document.getElementById("username-error").textContent = "";
            }

            // Check if email is empty
            if (email.trim() === "") {
                document.getElementById("email-error").textContent = "Email cannot be empty";
                isValid = false;
            } else {
                document.getElementById("email-error").textContent = "";
            }

            // If any validation fails, prevent form submission
            if (!isValid) {
                event.preventDefault();
                alert("Please fill in the required fields.");
            }
        });