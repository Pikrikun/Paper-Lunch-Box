var zoomImg = document.querySelectorAll('.zoom');
var zoomOverlay = document.querySelector('.zoom-overlay');

zoomImg.forEach(function(img) {
  img.addEventListener('click', function() {
    var imgSrc = this.getAttribute('src');
    zoomOverlay.innerHTML = '<img src="' + imgSrc + '">';

    zoomOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // hindari penggulungan halaman saat gambar diperbesar
  });
});

zoomOverlay.addEventListener('click', function() {
  this.style.display = 'none';
  document.body.style.overflow = ''; // atur overflow kembali ke nilai awal
});


function decrement() {
  const countSpan = document.getElementById("count");
  let count = parseInt(countSpan.innerText);
  count = count - 1 < 1 ? 1 : count - 1;
  countSpan.innerText = count;
}

function increment() {
  const countSpan = document.getElementById("count");
  let count = parseInt(countSpan.innerText);
  count = count + 1;
  countSpan.innerText = count;
}

function decrement() {
  var countElement = document.getElementById("count");
  var count = parseInt(countElement.textContent);

  if (count > 20) {
    count--;
    countElement.textContent = count;
  }
}

function increment() {
  var countElement = document.getElementById("count");
  var count = parseInt(countElement.textContent);

  count++;
  countElement.textContent = count;
}

var buyButton = document.getElementById("buy-button");
buyButton.addEventListener("click", function() {
  var countElement = document.getElementById("count");
  var count = parseInt(countElement.textContent);

  var productUrl = "https://shope.ee/3VFDt8G5jd?jumlah=" + count;
  window.open(productUrl, "_blank");
});

window.addEventListener('DOMContentLoaded', (event) => {
  const clickableImage = document.querySelector('.clickable-image');
  clickableImage.addEventListener('click', (event) => { 
  });
});

function showHarga(harga) {
  const hargaContainerElement2 = document.getElementById("hargaContainer2");
  hargaContainerElement2.innerHTML = "";
  
  
  const hargaElement = document.createElement("p");
  hargaElement.textContent = "Harga: Rp" + harga;
  hargaElement.classList.add("text-gray-600");
  hargaContainerElement2.appendChild(hargaElement);
}
