import { getUserByUsernameAndPassword } from '../../Services/CRUD_Users.js';
import { db_cloud } from "../../Services/Init.js";

document.addEventListener('DOMContentLoaded', async () => {
    const form = document.querySelector('#login-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = form['username'].value.trim();
        const password = form['password'].value.trim();
        if(username === "" || password === "") {  
            alert("Please fill in all fields");
            return;
        }
        const user = await getUserByUsernameAndPassword(db_cloud, username, password);
        console.log(user);
        if (user.length > 0) {
            console.log("User logged in successfully");
            alert("User logged in successfully");

            localStorage.setItem("user", JSON.stringify(user[0]));
            window.location.href = "../Home/index.html";
        } else {
            console.log("User not found");
            alert("User not found");
        }
    });
});