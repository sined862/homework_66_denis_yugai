const container = document.getElementById('container');
console.log(container);



function elementsAdd(number) {
    for (i=0; i < number; i++) {
        const elementDiv = document.createElement('div');
        const elementSpan = document.createElement('span');
        elementSpan.innerText = ` ${i+1}`;
        elementDiv.innerText = `Element`;
        elementDiv.className = "element";
        elementSpan.className = `color-${i+1}`;
        container.appendChild(elementDiv);
        elementDiv.appendChild(elementSpan);
    }
}

elementsAdd(5);
