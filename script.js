document.addEventListener("DOMContentLoaded", function () {
    const svgForm = document.getElementById("svgForm");

    svgForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const text = document.getElementById("text").value;
        const textColor = document.getElementById("textColor").value;
        const shape = document.getElementById("shape").value;
        const shapeColor = document.getElementById("shapeColor").value;

        const svg = generateSVG(text, textColor, shape, shapeColor);
        downloadSVG(svg, "logo.svg");
        console.log("Generated logo.svg");
    });

    function generateSVG(text, textColor, shape, shapeColor) {
        const svg = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="${shapeColor}" />
                <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
            </svg>
        `;
        return svg;
    }

    function downloadSVG(content, filename) {
        const blob = new Blob([content], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }
});
