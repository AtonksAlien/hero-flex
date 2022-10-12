menutbtn = document.querySelector('.hamburger')
items = document.querySelector('.menu-items')
ham = document.querySelector('.ham')
cross = document.querySelector('.cross')
menutbtn.addEventListener('click', function() {
    //cross.classList.toggle('flip-vertical-right')

    if (items.classList.contains('hidden')) {
        items.classList.remove('hidden')
        cross.classList.remove('hidden')
        items.classList.toggle('slide-in-left')
        ham.classList.toggle('fade-out')
        cross.classList.toggle('fade-in')
    } else {
        items.classList.toggle('slide-out-left')
        ham.classList.toggle('fade-in')
        cross.classList.toggle('fade-out')

    }    
})