menutbtn = document.querySelector('.hamburger')
items = document.querySelector('.menu-items')
links = document.querySelectorAll('li a')
ham = document.querySelector('.ham')
cross = document.querySelector('.cross')

menutbtn.addEventListener('click', function() {
    if (items.classList.contains('hidden')) {
        items.classList.remove('hidden')
/*      cross.classList.remove('hidden')
*/      items.classList.add('slide-in-left')
        items.classList.remove('slide-out-left')

/*      ham.classList.toggle('fade-out')
        cross.classList.toggle('fade-in')
 */    } else {
        items.classList.remove('slide-in-left')

        items.classList.add('slide-out-left')
        setTimeout(function() {
            items.classList.add('hidden')
        }, 500)
/*      ham.classList.toggle('fade-in')
        cross.classList.toggle('fade-out')
 */
    }    
})