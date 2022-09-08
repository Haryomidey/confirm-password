const input_1 = document.getElementById("pass-1")
const input_2 = document.getElementById("pass-2")
const btnCheck = document.getElementById("button-1");
const btnShow = document.getElementById("button-2");
const display = document.querySelector(".display");

function active() {
    if (input_1.value.length >= 4) {
        input_2.removeAttribute("disabled", "");
        btnCheck.removeAttribute("disabled", "");
        btnCheck.classList.add("active");
        btnCheck.addEventListener("click", () => {
            if (input_1.value != input_2.value) {
                display.classList.add('display-unactive');
                display.classList.remove('display-active');
                display.textContent = 'Password does not match';
            }
            else {
                display.classList.add('display-active');
                display.classList.remove('display-unactive');
                display.textContent = 'Confirmed!';
            }
        })

    }
    else {
        input_2.setAttribute("disabled", "");
        btnCheck.setAttribute("disabled", "");
        btnCheck.classList.remove("active");
    }


}

function active_2() {
    if (input_1.value.length >= 1) {
        btnShow.style.display = "block";
    }
    else {
        btnShow.style.display = "none";
    }

}
btnShow.addEventListener("click", () => {
    if ((input_1.type == "password") && (input_2.type == "password")) {
        input_1.type = "text";
        input_2.type = "text";
        btnShow.textContent = 'Hide';
    }
    else {
        input_1.type = "password";
        input_2.type = "password";
        btnShow.textContent = 'Show';
    }

})
