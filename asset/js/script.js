// if(window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches){
//     alert('WoW le dark')
// }

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
    const body = document.body;
    var image = document.getElementsByClassName('darkmode');
    var logo = document.getElementById('logo');

    if(body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
        image.src = "asset/image/akar-icons_moon-fill.png";
        logo.src = "asset/image/logo.png";
    }else if (body.classList.contains('light')){
        body.classList.add('dark')
        body.classList.remove('light')
        image.src = "asset/image/akar-icons_sun-fill.png";
        logo.src = "asset/image/logo-white.png";
    }
})

function menu() {
    if (document.getElementById('burger').classList.contains('open')) {
        document.getElementsByClassName('mobile_link-group')[0].style.display = 'none';
        document.getElementById('burger').classList.remove('open');
    } else {
        document.getElementsByClassName('mobile_link-group')[0].style.display = 'flex';
        document.getElementById('burger').classList.add('open');
    }
}