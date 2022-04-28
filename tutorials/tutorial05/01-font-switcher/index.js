let currentFontSize = 1.4;


const makeBigger = () => {
   currentFontSize += 0.2;
   document.querySelector('.content').style.fontSize = `${currentFontSize}em`;
   document.querySelector('h1').style.fontSize = `${currentFontSize+0.5}em`;
};

const makeSmaller = () => {
   currentFontSize -= 0.2;
   if (currentFontSize < 0.5) {
      currentFontSize = 0.5;
   }
   setFontSize ();           
};

const setFontSize = () => {
   document.querySelector('.content').style.fontSize = `${currentFontSize}em`;  
   document.querySelector('h1').style.fontSize = `${currentFontSize+0.5}em`;
}



