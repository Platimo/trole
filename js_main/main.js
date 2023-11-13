const zdjecie = document.getElementById(zdjecie)
const noweZdjecieUrl = document.getElementById(noweZdjecieUrl)
const lewo = document.getElementById('ArrowLeft')
const prawo = document.getElementById('ArrowRight')

document.addEventListener('ArrowRight', function (event) {
    if (event.key === 'ArrowRight') {
      // Zniknij w prawo
      zdjecie.style.transform = 'translateX(100%)';

      // Po chwili zmień zdjęcie i pojawi się nowe
      setTimeout(function () {
        zdjecie2 = noweZdjecieUrl;
        zdjecie2.style.transform = 'translateX(0)';
      }, 500); // Czas trwania animacji w milisekundach
    }
  });
