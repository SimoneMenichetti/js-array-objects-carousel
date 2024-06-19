
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.


const images = [ 

    { 
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
     },

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

        // prendiamo l elemento thumbnailcontenitore per l inserimento degli item e lo rendiamo globale
        const thumbnailsContenitore = document.querySelector(".thumbnails");

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
    

     // Creazione elemento thumbnail
     const thumbnailItem = document.createElement("img");
    //  creazione riferimento per inserire i valori degli itemimg negli elementi dinamici 
     thumbnailItem.src = itemImmagine.image;
    //  aggiungiamo la class all elemento
     thumbnailItem.classList.add('thumbnail-item');
     thumbnailsContenitore.append(thumbnailItem);


    // Aggiunta evento click alla thumbnail per cambiare l'immagine attiva
    thumbnailItem.addEventListener('click', 
        function() {
        document.querySelector('.carosello-item.active').classList.remove('active');
        imagesItem.classList.add('active');
        }
    );
}

    const itemContenuto  = document.getElementsByClassName("carosello-item");
    let activeItem = 0;

    // Inserire la classe active al primo carosello-item
    itemContenuto[activeItem].classList.add("active");


    // BONUS 2:
    // Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

        //  Funzione per cambiare l'immagine attiva
    function changeImage(next = true) {
        itemContenuto[activeItem].classList.remove("active");

        if (next) {
            activeItem = (activeItem + 1) % images.length;
        } else {
            activeItem = (activeItem - 1 + images.length) % images.length;
        }

        itemContenuto[activeItem].classList.add("active");
    }


 
    // Gestire il click sul bottone prev
    const prev = document.querySelector(".prev");
     prev.addEventListener("click", 
        function() {
            changeImage(false);
        }
    );

    // Gestire il click sul bottone next
    const next = document.querySelector(".next");
        next.addEventListener("click", 
            function() {
                changeImage(true);
            }
    );

    // Impostare l'autoplay per cambiare l'immagine ogni 3 secondi
    setInterval(function() {
        changeImage(true);
    }, 3000);


   


    

