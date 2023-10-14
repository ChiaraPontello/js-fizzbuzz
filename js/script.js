//riprendo classe boxes
const boxes = document.querySelector('.boxes');




//inizio ciclo for che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

//creazione cartella per i 100 box su html
  const box = document.createElement('div');
  box.classList.add('box');
  
//collegamento tra boxes e box
  boxes.append(box);
  
  //i numeri  sia multipli di 3 che di 5  “FizzBuzz” usando la classe append()
  if (i % 15 === 0) {
    
    box.classList.add('ColFizzbuzz');
    box.append('FizzBuzz');

   
   
  }

  
}
