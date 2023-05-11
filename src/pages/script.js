let btnOpen = document.querySelector('button');
let input = "http://localhost:3000/resumen"
btnOpen.addEventListener('click', () => {
    window.open(input.value, '_blank', 'height=600px, width=600px');
});