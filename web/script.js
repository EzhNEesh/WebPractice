onclick=function (event) {
    let target=event.target
    if(target.className === 'header-info__menu') {
        let ms = document.getElementsByClassName('menu__submenu')
        ms[0].style.display='block'
    } else {
        let ms = document.getElementsByClassName('menu__submenu')
        ms[0].style.display='none'
    }
}

!function () {
    let arrayHref = document.getElementsByClassName('menu__menu-item_text')
    for (let i = 0; i < arrayHref.length; i++) {
        if (document.location.href === arrayHref[i].href) {
            arrayHref[i].classList.add('menu__menu-item_text_is-located')
        }
    }
}()

window.onload = function () {
    let loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    document.getElementById('page-load-time').textContent += ' ' + loadTime / 1000 + ' Seconds'
}