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