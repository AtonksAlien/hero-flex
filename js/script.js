menutbtn = document.querySelector('.hamburger')
items = document.querySelector('.menu-items')
ham = document.querySelector('.ham')
cross = document.querySelector('.cross')
menutbtn.addEventListener('click', function() {
    //cross.classList.toggle('flip-vertical-right')

    if (items.classList.contains('hidden')) {
        items.classList.remove('hidden')
        items.classList.toggle('slide-in-left')
        ham.classList.add('flip-vertical-right')

    } else {
        items.classList.toggle('slide-out-right')
    }    
})