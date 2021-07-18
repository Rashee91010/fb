var names = ["Abhishek Dorwani", "Lata Surtani", "Rashee Dorwani"];
var image = ["afather.jpg", "amother.jpg", "adaughter.jpg"];
var i = 0;
function next(){
    if(i<=2){
    document.getElementById("pic").src=image[i];
    document.getElementById("names").innerHTML=names[i];
    i++;
}
}