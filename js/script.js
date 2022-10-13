menutbtn = document.querySelector('.hamburger')
items = document.querySelector('.menu-items')
links = document.querySelectorAll('li a')
ham = document.querySelector('.ham')
cross = document.querySelector('.cross')

menutbtn.addEventListener('click', function() {
    if (items.classList.contains('hidden')) {
        items.classList.remove('hidden')
        items.classList.add('slide-in-left')
        items.classList.remove('slide-out-left')

        ham.classList.add('fade-out')
        setTimeout(function() {
            ham.classList.add('hidden')
            ham.classList.remove('fade-out')
            cross.classList.remove('hidden')
            cross.classList.add('fade-in')
        }, 250)
        setTimeout(function() {
            cross.classList.remove('fade-in')
        }, 500)

    } else {
        items.classList.remove('slide-in-left')
        items.classList.add('slide-out-left')
        setTimeout(function() {
            items.classList.add('hidden')
        }, 500)

        cross.classList.add('fade-out')
        setTimeout(function() {
            cross.classList.add('hidden')
            cross.classList.remove('fade-out')
            ham.classList.remove('hidden')
            ham.classList.add('fade-in')
        }, 250)
        setTimeout(function() {
            ham.classList.remove('fade-in')
        }, 500)
    }    
})