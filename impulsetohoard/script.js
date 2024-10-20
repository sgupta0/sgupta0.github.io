document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    let textVisible = false; // Track visibility state

    wrapper.addEventListener('mouseenter', () => {
        const image = wrapper.querySelector('img');
        const text = wrapper.querySelector('.image-text');

        textVisible = !textVisible; // Toggle visibility state

        if (textVisible) {
            text.style.opacity = 1; // Show text
            image.style.opacity = 0; // Hide image
        } else {
            text.style.opacity = 0; // Hide text
            image.style.opacity = 1; // Show image
        }
    });
});