var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
var sliderNumber = document.getElementById("slider-number");
var nextbtn = document.getElementById("next");
var prevbtn = document.getElementById("previous");

var slidesCount = sliderImages.length;
var currentSlide = 1;

nextbtn.onclick = nextSlide;
prevbtn.onclick = prevSlide;



var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for (var i = 1; i <= slidesCount; i++) {
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);
var paginationCreatedUl = document.getElementById('pagination-ul');


var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"))
        theChecker();

    }
}
theChecker();

function theChecker() {
    sliderNumber.textContent = "slide #" + (currentSlide) + " of " + (slidesCount);

    removeAllActive();
    sliderImages[currentSlide -1].classList.add("active");
    paginationCreatedUl.children[currentSlide -1].classList.add("active");

    if (currentSlide == 1) {
        prevbtn.classList.add("disabled");
    } else {
        prevbtn.classList.remove("disabled");
    }

    if (currentSlide == slidesCount) {
        nextbtn.classList.add("disabled");
    } else {
        nextbtn.classList.remove("disabled");
    }
}

function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove("active");
    });

    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove("active");
    });
}

function nextSlide() {
    if (nextbtn.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}


function prevSlide() {
    if (prevbtn.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}