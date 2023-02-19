document.getElementById("emoji").addEventListener("mouseover",mouseOver);
document.getElementById("emoji").addEventListener("mouseout",mouseOut);
function mouseOver(){
    document.getElementById("emoji").src="monkey1.png";
}
function mouseOut(){
    document.getElementById("emoji").src="monkey2.png";
}

