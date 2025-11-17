document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let check = document.getElementById("check");
    

    // Check empty fields
    if (email === "" || password === "" || fname === "" || lname === "") {
        Swal.fire({
            title: "Error",
            text: "Please fill in all information",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#067a4f"
        });
        return;
    }

    // Check email validity
    if (!email.includes("@") || !email.includes(".")) {
        Swal.fire({
            title: "Invalid Email",
            text: "Please enter a valid email address (must contain '@' and '.')",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#067a4f"
        });
        return;
    }

    // Check checkbox
    if (!check.checked) {
        Swal.fire({
            title: "Error",
            text: "Please agree to the Terms and Conditions",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#067a4f"
        });
        return;
    }

    // SUCCESS
    Swal.fire({
        title: "Welcome",
        text: "You signed up successfully",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#067a4f"
    });
	
});
document.getElementById("logo").addEventListener("click", function () {
    Swal.fire({
        title: "Credits",
        text: "Patrik Cigoj, 4.RA",
        icon: "success",
        confirmButtonText: "OK",
		confirmButtonColor: "#067a4f"
    });
});