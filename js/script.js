function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if ((u === "admin" && p === "1234") ||
        (u === "user1" && p === "1234")) {

        localStorage.setItem("mode", "login");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText =
        "Invalid Username or Password";
    }
}

function guestLogin() {
    localStorage.setItem("mode", "guest");
    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.removeItem("mode");
    window.location.href = "index.html";
}

const restaurantNumbers = {
    rest1: "+91 9876543210",
    rest2: "+91 9123456780",
    home1: "+91 9988776655",
    home2: "+91 9012345678",
    home3: "+91 9090909090"
};

function getVendor() {
    const params = new URLSearchParams(window.location.search);
    return params.get("vendor");
}

function showNumber() {
    let mode = localStorage.getItem("mode");

    if (mode !== "login") {
        alert("Only Login Users Can Order Food");
        return;
    }

    const vendor = getVendor();
    const number = restaurantNumbers[vendor];

    if (!number) {
        document.getElementById("contact").innerText =
        "Vendor number not found!";
        return;
    }

    document.getElementById("contact").innerHTML =
    `<a href="tel:${number}">Call to Order: ${number}</a>`;
}


function checkAchieversAccess() {
    let mode = localStorage.getItem("mode");
    if (mode !== "login") {
        let contacts = document.querySelectorAll(".contact-info");
        contacts.forEach(c => c.innerText =
            "Login to view contact details");
    }
}
