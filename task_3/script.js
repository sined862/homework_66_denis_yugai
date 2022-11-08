const container = document.getElementById('container');
console.log(container);

for (i=0; i < 5; i++) {
    const newElement = document.createElement('div');
    newElement.innerText = `Element ${i+1}`;
    newElement.className = "element"
    container.appendChild(newElement)
}