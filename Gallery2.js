document.addEventListener('DOMContentLoaded', function () {
    const imageStack = document.querySelector('.image-stack');

    imageStack.addEventListener('click', function () {
        // Toggle the 'expanded' class on click
        this.classList.toggle('expanded');
    });
});