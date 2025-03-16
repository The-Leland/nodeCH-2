



function createHeading(headingSize, headingText) {
    
    const headingSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    if (headingSizes.includes(headingSize)) {
        
        const heading = document.createElement(headingSize);
        
        
        heading.textContent = headingText;

        return heading;
    } else {
        console.error("Invalid heading size. Please choose between 'h1' to 'h6'.");
        return null; 
    }
}


function render(headingElement, targetClass) {
    const targetContainer = document.querySelector(`.${targetClass}`);

    if (targetContainer && headingElement) {
        
        targetContainer.appendChild(headingElement);
    } else {
        console.error("Target container not found or invalid heading element.");
    }
}
