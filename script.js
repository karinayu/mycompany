menu.onclick = function myFunction() {
    let x = document.getElementById('nav');

    if (x.className === 'header_right') {
        x.className += ' responsive';
    } else {
        x.className = 'header_right';
    }
}