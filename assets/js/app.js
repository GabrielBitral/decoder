const textInputElement = document.getElementById('text-area__input');
const textOutputElement = document.getElementById('text-output');

const criptText = () => {
    const normalText = textInputElement.value;
    const lenghtText = normalText.length;
    let finalText = '';
    for (let l = 0; l < lenghtText; l++) {
        switch (normalText[l]) {
            case 'a':
                finalText += 'ai';
                break;
            case 'e':
                finalText += 'enter';
                break;
            case 'i':
                finalText += 'imes';
                break;
            case 'o':
                finalText += 'ober';
                break;
            case 'u':
                finalText += 'ufat';
                break;
            default:
                finalText += normalText[l];
                break;
        }
    }
    defineOutputItemsVisibility();
    textOutputElement.innerHTML = finalText;
}

const decriptText = () => {
    const criptText = textInputElement.value;
    let finalText = criptText;

    if (criptText.includes('ai')) {
        finalText = finalText.replaceAll('ai', 'a');
    }

    if (criptText.includes('enter')) {
        finalText = finalText.replaceAll('enter', 'e');
    }

    if (criptText.includes('imes')) {
        finalText = finalText.replaceAll('imes', 'i');
    }

    if (criptText.includes('ober')) {
        finalText = finalText.replaceAll('ober', 'o');
    }

    if (criptText.includes('ufat')) {
        finalText = finalText.replaceAll('ufat', 'u');
    }

    defineOutputItemsVisibility();
    textOutputElement.innerHTML = finalText;
}

const defineOutputItemsVisibility = () => {
    const titleOutputElement = document.querySelector('.output-text__title');
    const containerTextOutputElement = document.querySelector('.output-text__content');
    const imageWithoutText = document.querySelector('.output-text__search-img');
    const buttonCopy = document.querySelector('.button-copy');
    const outputTextParagraph = document.querySelector('.output-text__description');

    titleOutputElement.setAttribute('hidden', 'hidden');
    imageWithoutText.setAttribute('hidden', 'hidden');

    buttonCopy.style.display = 'block';
    containerTextOutputElement.style.justifyContent = 'start';
    containerTextOutputElement.style.alignItems = 'start';
    containerTextOutputElement.style.fontSize = '2rem';
    outputTextParagraph.style.textAlign = 'start';
}   

const copyText = () => {
    navigator.clipboard.writeText(textOutputElement.innerHTML);
    const buttonCopy = document.querySelector('.button-copy');
    buttonCopy.innerHTML = 'Texto Copiado!';
    setTimeout(() => {
        buttonCopy.innerHTML = 'Copiar';
    }, 2000);
}

textInputElement.addEventListener('keypress', (c) => {
    if (!checkChar(c)) {
        c.preventDefault();
    }
})

const checkChar = (c) => {
    const char = String.fromCharCode(c.keyCode);

    const pattern = '[a-zA-Z!?]';

    if (RegExp(pattern).exec(char)) {
        return true;
    }
}