document.addEventListener("DOMContentLoaded", function() { 
    const parallax = document.querySelector('.parallax');
    const layers = parallax.children;

    console.log('!');

    function moveLayers(wscroll) {
        Array.from(layers).forEach(layer => {

            const divider = layer.dataset.speed;
            const strafe = wscroll * divider / 10;

            layer.style.transform = `translateY(-${strafe}%)`;

        });
    }

    window.addEventListener('scroll', () => {
        const wscroll = window.pageYOffset;
        moveLayers(wscroll);
    })
});