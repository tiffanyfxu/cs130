const circle = '<circle cx="416" cy="494" r="20" stroke="black" stroke-width="3" fill="red"></circle>';
const square = '<rect x="291" y="70" width="40" height="40" stroke="black" stroke-width="3" fill="pink"></rect>'
const triangle = ' <polygon points="100,100 150,100 125,135" stroke="black" stroke-width="3" fill="teal"></polygon>';


document.querySelector('svg').insertAdjacentHTML("beforeend", circle);

document.querySelector('svg').insertAdjacentHTML("beforeend", square);

document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);


// Step 1: what event do we want to use to create these shapes

// Step 2: create an event handler to attatch to the event:

const addShape = (ev) => {
    console.log(ev.clientX, ev.clientY);
    console.log('add shape');
    const circle = `<circle cx="${ev.offsetX}" cy="${ev.offsetY}" r="20" stroke="black" stroke-width="3" fill="red"></circle>`;
    document.querySelector('svg').insertAdjacentHTML ("beforeend", circle);
}

/**
 * Your job: when the user clicks the svg element, 
 * draw the shape the corresponds with the controls 
 * in the left-hand panel.
 */