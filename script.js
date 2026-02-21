// Typewriter effect function
function typewriterEffect(element, text, delay = 100) {
    let index = 0;
    const type = () => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    };
    type();
}

// Envelope opening function
function openEnvelope(animationDuration = 1000) {
    const envelope = document.getElementById('envelope');
    envelope.style.transition = `transform ${animationDuration}ms`;
    envelope.style.transform = 'rotateY(180deg)';
}

// Example usage:
const typewriterElement = document.getElementById('typewriter');
typewriterEffect(typewriterElement, 'Hello World!');

openEnvelope();