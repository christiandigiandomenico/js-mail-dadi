const userEmail = "cassonevuoletoccarmi@gmail.com"
const listEmail = ["cassonevuoletoccarmi@gmail.com", "palangaparlatroppo@gmail.com", "pogliariantipatico@live.it"]

let accessGranted = false

for (let i = 0; i < listEmail.length; i++) {
    if (userEmail === listEmail[i]) {
        accessGranted = true
    }
    console.log(i)
}

if (accessGranted) {
    document.getElementById("result").innerHTML = "Accesso consentito";
} else {
    document.getElementById("result").innerHTML = "Accesso negato";
}