click()

function click() {
    let btn = document.querySelector('.btn');
    let contentMenu = document.querySelector('#content-menu');

    btn.addEventListener('click', function() {

        btn.classList.toggle("active"),
        contentMenu.classList.toggle('remove'),
        contentMenu.classList.toggle('remove2')
    })
}