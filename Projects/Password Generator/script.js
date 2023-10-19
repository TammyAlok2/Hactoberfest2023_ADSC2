function generatePassword() {
    var length = document.getElementById("length").value;
    var type = document.getElementById("type").value;
    var result = "";

    var characters = "";
    if (type === "integer") {
        characters = "0123456789";
    } else if (type === "character") {
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if (type === "mix") {
        characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("output").textContent = "Generated Password: " + result;
}
