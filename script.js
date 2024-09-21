const alternatives = [
    {text:"", images:"cats3.gif"},
    {text:"are you sure?" , images:"cats3.gif"},
    {text:"really sure??" , images:"cats3.gif"},
    {text:"are you positive???" , images:"cats3.gif"},
    {text:"please", images:"cats6.gif"},
    {text:"just tink about it" , images:"cats6.gif"},
    {text:"if you say no , i'll be sad" , images:"cats2.gif"},
    {text:"i'll be very sad", images:"cats2.gif"},
    {text:"i'll be very very sad", images:"cats8.gif"},
    {text:"ok fine i'll stop asking...." , images:"cats9.gif"},
    {text:"just kidding , PLEASE SAY YES" , images:"cats10.gif"},
    {text:"I'LL BE VERY VERY VERY VERY SAD" , images:"cats8.gif"},
    {text:"YO ARE BREAKING MY HEART NOW ;(" , images:"cats8.gif"},
    {text:"I'M CRYING", images:"cats7.gif"}
];
const ohyes = {text:"so sweet of you 😚😚", images:"cats5.gif"};
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
        if(button.textContent === 'YES'){
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
