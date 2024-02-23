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

    textOutputElement.innerHTML = finalText;
}