var slajd = document.querySelector('.slajd');
var img = ['slide_01.jpg', 'slide_02.jpg'];
var i = 0

function prev(){
    if(i <= 0 ) i = img.length
    i--;
    return setImg();
}

function next(){
}
function setImg() {
    return slajd.setAttribute('src', 'img/' + img[i]);
}