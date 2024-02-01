const buttonElement = document.querySelector("#button")

buttonElement.addEventListener("click",

    function () {
        const userEmail = document.querySelector("#inputmail").value

        const listEmail = ["viavai@gmail.com", "oggimisentocontento@gmail.com", "ognitantoprogrammo@live.it"]

        let accessGranted = false

        for (let i = 0; i < listEmail.length; i++) {
            if (userEmail === listEmail[i]) {
                accessGranted = true
            }
        }

        if (accessGranted) {
            document.getElementById("result").innerHTML = "Accesso consentito";
        } else {
            document.getElementById("result").innerHTML = "Accesso negato";
        }

    }

)