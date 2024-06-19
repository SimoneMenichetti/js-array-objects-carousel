
//     BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.



const images = [ 

    { 
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },

     { 
        image: './img/02.webp',
         title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    },
     { 
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
     },

    { 
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    },

    { 
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    } 
];


      // 3
        // prendere l' elemento contenitore degli item del carosello rendendolo globale 

        const itemsContenitore = document.querySelector(".carosello");

// 2
    // inizio ciclo for per estrapolazione degli elementi img

    for(let i = 0; i < images.length; i++) {
    //    riciclo elemento itemimmagine 
        let itemImmagine = images[i];
        console.log(itemImmagine);
    // creazione elemento da inserire riciclando 
        const imagesItem = document.createElement("div");

            imagesItem.classList.add('carosello-item');

            imagesItem.innerHTML = 
    // Trasformare la stringa dell immagine in un immagine effettiva 
                `<div class="carosello">
                    <img src="${itemImmagine.image}" alt="">
                    <h3>${itemImmagine.title}</h3>
                    <span> ${ itemImmagine.text}</span>
                </div>`;
                // appendiamo dinamicamente
                itemsContenitore.append(imagesItem);
    }


        const itemContenuto  = document.getElementsByClassName("carosello-item");

            // // verifica funzionamento

            // console.log(itemContenuto);

        let activeItem = 0;
    // 7
        // inserire la class active all " carosello-item"
        itemContenuto [activeItem].classList.add("active");

        // verifica funzionamento aggiunta classe activ al " carosello-item 0"
            // console.log( itemCarosello[activeItem]);

    // 8
        // per dare la funzione di active all'interazione utente vado a selezionare il bottone next creando una const

        const next = document.querySelector(".next");
            // verifica funzionamento selezione in console
            // console.log(next);

       const prev= document.querySelector(".prev");
        


    // 9 gestire l evento click

    next.addEventListener("click",
        function() {

            if(activeItem < images.length -1) {

                // verificare se non siamo alla fine della lista immagini

                

                // eliminare l'active all item attivo
                itemContenuto [activeItem].classList.remove("active");



                // incremento valore item

                activeItem +=1;


                // inserire la classe active agli elementi corrispondenti all item aggiornato

                itemContenuto [activeItem].classList.add("active");

            } else {
                // Se siamo alla fine della lista immagini, torna al primo
                itemContenuto [activeItem].classList.remove("active");

                activeItem = 0;

                itemContenuto [activeItem].classList.add("active");

            }

        }

    );

    // BONUS 

    prev.addEventListener('click', 
        function() {
            if (activeItem > 0) {
                // Eliminare l'active dall'item attivo
                itemContenuto [activeItem].classList.remove("active");
        
                // Decremento valore item
                activeItem -= 1;
        
                // Inserire la classe active all'elemento corrispondente all'item aggiornato
                itemContenuto [activeItem].classList.add("active");
            } else {
                // Se siamo all'inizio della lista immagini, torna all'ultimo
                itemContenuto  [activeItem].classList.remove("active");
                activeItem =  images.length - 1;
                itemContenuto  [activeItem].classList.add("active");
            }
        }
    );


 



  

