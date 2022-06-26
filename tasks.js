function bulb_on(){
    document.getElementById("bulb_image").src="bulb_on.png"
    document.getElementById("")
}

function bulb_off(){
    document.getElementById("bulb_image").src="bulb_off.png"
}

function visit(response) {
    document.querySelector("#visits").textContent=response.value;
}