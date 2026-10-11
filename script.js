let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let element = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?"];
function generatePassword() {
    let passwordLength = 12;
    let password3 = "";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * element.length);
        password3 += element[randomIndex];
    }
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() *element.length);
        password += element[randomIndex];
    }
    password1.textContent = password3;
    password2.textContent = password;
}
password1.onclick = function() {
    copyPassword(this);
};

password2.onclick = function() {
    copyPassword(this);
};

function copyPassword(element) {
    let password = element.textContent;

    if (password === "" || password.includes(".....")) {
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password copied!");
        })
        .catch(() => {
            alert("Copy failed!");
        });
}
