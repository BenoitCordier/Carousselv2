

var images = Array('img/caroussel1.png', 'img/caroussel2.jpg', 'img/caroussel3.jpg', 'img/caroussel4.jpg', 'img/caroussel5.jpg');

var src = document.getElementById("diapo").src;

src.setAttribute('src', this.images.Array[this.images.Array.length]);

var diaporama = new Diaporama(src, images);

setInterval(function () { diaporama.slideLeft(); }, 5000);

const btnPrecedent = document.getElementById('precedent');

btnPrecedent.addEventListener('click', diaporama.slideRight());

const btnSuivant = document.getElementByID('suivant');

btnSuivant.addEventListener('click', diaporama.slideLeft());