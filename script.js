let addbtn = document.querySelector("#buttonadd");
let resetbtn = document.querySelector("#reset");
let count = document.querySelector("#user-count")
let togglebtn = document.querySelector("#toggle");
let messagedisplay= document.querySelector("#message");

let isDark = true;
let value = 0;
let target = 108;

localStorage.getItem("value", value);

togglebtn.addEventListener("click", function toggle() {
    main = document.querySelector(".main");
    if (isDark) {
        main.style.backgroundColor = "white";
        main.style.color = "#0B0F0F";
        isDark = false;
        togglebtn.textContent = "Dark Mode";
    } else {
        main.style.backgroundColor = "#0B0F0F";
        main.style.color = "white";
        isDark = true;
        togglebtn.textContent = "Light Mode";
    }
});


addbtn.addEventListener("click", function add() {
    if (value < target) {
        localStorage.setItem("value",value+=1);
        count.textContent = value;
        count.style.boxShadow = "0px 0px 100px #1df10596";
    } else {
        messagedisplay.textContent="Target reached!"
        messagedisplay.style.display= "block";
    }
    updateColor();
})

resetbtn.addEventListener("click", function reset() {
    let answer = confirm("Are you Sure You want to reset?");
    if (answer == true) {
        value = 0;
        count.textContent = value;
        count.style.boxShadow = "0px 0px 100px #68c3bb96";
        updateColor();

        if(messagedisplay.style.display!=="none"){
            messagedisplay.style.display= "none  ";
        }
    }
})

function updateColor() {
    if((value==target) || (value==0)){
        count.style.color="white";
    } else {
        count.style.color="green";
    }
}

