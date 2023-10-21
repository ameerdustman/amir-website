document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    
    textElement.addEventListener("click", function() {
        // Change the text color to a random color when clicked
        const randomColor = getRandomColor();
        textElement.style.color = randomColor;
    });
    
    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
