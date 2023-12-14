ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 2000,
    delay: 3000
});


ScrollReveal().reveal('.anim_left', {delay: 200, origin: 'left'})
ScrollReveal().reveal('.anim_right', {delay: 200, origin: 'right'})
ScrollReveal().reveal('.anim_top', {delay: 200, origin: 'top'})
ScrollReveal().reveal('.anim_bot', {delay: 200, origin: 'bottom'})