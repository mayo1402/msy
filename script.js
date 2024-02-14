const alternatives = [
    {text:"", images:"https://media.tenor.com/Kjn2wa6bgMoAAAAi/cute-cats.gif"},
    {text:"please", images:"https://media1.tenor.com/m/_C06NtBa8pcAAAAC/mochi-poke-poke-cute-cat.gif"},
    {text:"i'll be sad", images:"https://media1.tenor.com/m/La-Vncg9iAEAAAAC/cat-cats.gif"},
    {text:"one last dance", images:"https://media1.tenor.com/m/MCLtDVYmaq8AAAAC/cat-please.gif"},
    {text:"i'm crying", images:"https://media1.tenor.com/m/ojuHIy32mtwAAAAC/mudoh.gif"}
];
const ohyes = {text:"so sweet please ! one last dance", images:"https://media1.tenor.com/m/plvrL3peoBIAAAAC/mochi-cat.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'SÍ'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});
