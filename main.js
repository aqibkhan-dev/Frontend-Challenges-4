const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        let accordionDiscription = this.nextElementSibling
        let plusIcon = this.querySelector('.plus-icon');
        let minusIcon = this.querySelector('.minus-icon');
        if (accordionDiscription.style.maxHeight) {
            accordionDiscription.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDiscription.style.maxHeight = accordionDiscription.scrollHeight + 'px' 
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    });
});

