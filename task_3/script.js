const container = document.getElementById('container');
console.log(container);



function elementsAdd() {
    for (i=0; i < 5; i++) {
        const element = document.createElement('div');
        const spanElement = document.createElement('span')
        spanElement.innerText = ` ${i+1}`
        element.innerText = `Element`;
        element.className = "element"
        spanElement.className = `color-${i+1}`
        container.appendChild(element)
        element.appendChild(spanElement)  
    }
}

elementsAdd()
