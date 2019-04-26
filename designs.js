function makeGrid() {
    canvas = document.getElementById("pixelCanvas");
    canvasHeight = document.getElementById("inputHeight").value;
    canvasWidth = document.getElementById("inputWidth").value;

    // if there are already canvas elements, we delete the old ones first!
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }



    console.log(canvasHeight)
    console.log(Number.isInteger(canvasHeight))

    if (canvasHeight > 100) {
        window.alert("please insert a value between 0 and 100");
        return 0;
    }
    if (canvasWidth > 100) {
        window.alert("please insert a value between 0 and 100");
        return 0;
    }
    //check if it is a decimal
    if (canvasWidth % 1 != 0 || canvasHeight % 1 != 0) {
        window.alert("please insert an Integer");
        return 0;
    }
    //check if string is int
    if (!Number.isInteger(Number.parseInt(canvasWidth)) || !Number.isInteger(Number.parseInt(canvasHeight))) {
        window.alert("please insert an Integer");
        return 0;
    }
    // if there are already canvas elements, we delete the old ones first!
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    //create canvas elements as tr and td 
    for (let x = 1; x <= canvasHeight; x++) {
        canvasRow = document.createElement('tr');
        canvas.appendChild(canvasRow);
        for (let y = 1; y <= canvasWidth; y++) {
            let canvasElement = document.createElement('td');
            canvasRow.appendChild(canvasElement);

            //add event listener to every canvas element and giive it a color attribute
            canvasElement.addEventListener('mousedown', function() {
                color = document.getElementById("colorPicker").value
                this.style.backgroundColor = color;
            })
        }
    }

    //on mouse down event, if target of mouse is a TD, we set the color of that TD to the currently selected color 
    canvas.addEventListener('mousedown', function(e) {
        if (e.target.tagName === 'TD') {
            e.target.style.backgroundColor = color;
        }
    });

}