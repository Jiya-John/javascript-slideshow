var slides = document.getElementsByClassName("slide");
var current = 0;
var total = slides.length;

//for performing next
var next = document.getElementById("next");

next.addEventListener("click", function() {
    current++;

    if(current>=total){
        current = 0;
    }
    //console.log(current);

    for(var i=0;i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[current].style.display = "block";
});

//for previous
var previous = document.getElementById("previous");

previous.addEventListener("click", function() {
    current--;

    if(current < 0){
        current = total-1;
    }
    
    for(var i=0;i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[current].style.display = "block";
});

