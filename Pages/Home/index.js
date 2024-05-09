document.addEventListener('DOMContentLoaded', async () => {
    // Check user exist if not will redicter to the login page
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user == null) {
        window.location.href = "../Login/index.html";
    }
});