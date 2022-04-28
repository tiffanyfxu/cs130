const resetButtonBackgrounds = () => {
    const color = '#EEE';
    document.querySelector("#btn1").style.backgroundColor = color;
    document.querySelector("#btn2").style.backgroundColor = color;
    document.querySelector("#btn3").style.backgroundColor = color;
    document.querySelector("#btn4").style.backgroundColor = color; 
}


const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = 'red';
    document.querySelector("#btn1").style.backgroundColor = '#FF7F50';
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor = 'blue';
    document.querySelector("#btn2").style.backgroundColor = '#89CFF0';
    
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor = 'pink';
    document.querySelector("#btn3").style.backgroundColor = '#FF69B4';
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor = 'orange';
    document.querySelector("#btn4").style.backgroundColor = '#FFD580';
};


