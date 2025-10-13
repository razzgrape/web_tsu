function removeShape(shapeId) {
    let shape = document.getElementById(shapeId);
    shape.remove();
}

function changeShapeColor(shapeId) {
    let shape = document.getElementById(shapeId);
    shape.style.backgroundColor = 'yellow';
}

function createSquareShapes(inputId) {
    let input = document.getElementById(inputId);
    let amount = input.value;
    
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'red';
        square.style.opacity = '0.9';
        square.style.border = '3px solid black';
        let size = Math.random() * 500;
        square.style.height = size;
        square.style.width = size;
        square.style.position = 'absolute';
        square.style.left = Math.random() * (window.innerWidth - size);
        square.style.top = Math.random() * (window.innerHeight - size);

        let squareId = `square-${Date.now() + Math.floor(Math.random() * 10000)}`;
        square.id = squareId;

        square.ondblclick = function () { removeShape(squareId); };
        square.onclick = function () { changeShapeColor(squareId); };

        let parent = document.getElementById('shapes-container');
        parent.appendChild(square);
    }
}

function createTriangleShapes(inputId) {
    let input = document.getElementById(inputId);
    let amount = input.value;
    
    for (let i = 0; i < amount; i++) {
        let triangle = document.createElement('div');
        triangle.style.opacity = '0.9';
        let size = Math.random() * 500;
        triangle.style.border = `${size}px solid transparent`;
        triangle.style.borderBottom = `${size}px solid blue`;
        triangle.style.boxSizing = 'border-box';
        triangle.style.position = 'absolute';
        triangle.style.left = Math.random() * (window.innerWidth - size * 2);
        triangle.style.top = Math.random() * (window.innerHeight - size * 2);

        let triangleId = `triangle-${Date.now() + Math.floor(Math.random() * 10000)}`;
        triangle.id = triangleId;

        triangle.ondblclick = function () { removeShape(triangleId); };
        triangle.onclick = function () {
            let el = document.getElementById(triangleId);
            el.style.borderBottomColor = 'yellow';
        };

        let parent = document.getElementById('shapes-container');
        parent.appendChild(triangle);
    }
}

function createCircleShapes(inputId) {
    let input = document.getElementById(inputId);
    let amount = input.value;

    for (let i = 0; i < amount; i++) {
        let circle = document.createElement('div');
        circle.style.backgroundColor = 'green';
        circle.style.opacity = '0.9';
        circle.style.border = '3px solid black';
        let size = Math.random() * 500;
        circle.style.height = size;
        circle.style.width = size;
        circle.style.borderRadius = '100%';
        circle.style.position = 'absolute';
        circle.style.left = Math.random() * (window.innerWidth - size);
        circle.style.top = Math.random() * (window.innerHeight - size);

        let circleId = `circle-${Date.now() + Math.floor(Math.random() * 10000)}`; 
        circle.id = circleId;

        circle.ondblclick = function () { removeShape(circleId); };
        circle.onclick = function () { changeShapeColor(circleId); };
        
        let parent = document.getElementById('shapes-container');
        parent.appendChild(circle);
    }
}