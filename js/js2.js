document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Nastavi svoj pravi email + geslo:
    const correctEmail = "test@test.com";
    const correctPassword = "12345";

    //  Preverjanje praznih polj
    if (email === "" || password === "") {
        Swal.fire({
            title: "Error",
            text: "Please fill in all information",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#067a4f"
        });
        return;
    }

    // 2. Preverjanje oblike emaila
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

    //  Preverjanje, ali je EMAIL pravilen
    if (email !== correctEmail) {
        Swal.fire({
            title: "Invalid login",
            text: "Email or password is incorrect",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#067a4f"
        });
        return;
    }

    // Preverjanje, ali je GESLO pravilno
    if (password !== correctPassword) {
        Swal.fire({
            title: "Invalid login",
            text: "Email or password is incorrect",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#067a4f"
        });
        return;
    }

    // Če je vse pravilno → success
    Swal.fire({
        title: "Welcome back",
        text: "You logged in successfully",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#067a4f"
    }).then(() => {
        
       
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