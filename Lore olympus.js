// alert('hola');
// let surname = prompt('Greetings friend, may I enquire as to your surname?');

alert('hola');

// elementos interaccion 1


let headerElement3 = document.querySelector ('#header_element3');
let menuContenido = document.querySelector ('#menu_contenido');
let closeMenu = document.querySelector ('#close_menu');



headerElement3.addEventListener('click', function(){
    menuContenido.style.transform= 'translateY(60px)';
});

closeMenu.addEventListener('click', function(){
    menuContenido.style.transform= 'translateY(-460px)';
});

// elementos interaccion 2

let mainOptionCharacters = document.querySelector ('#main_option_characters')                   
let mainOptionTrivia = document.querySelector('#main_option_trivia')
let mainOptionAuthor = document.querySelector ('#main_option_author_info') 
let mainTrivia = document.querySelector('#main_info') 
let mainCharacters = document.querySelector('#main_characters')
let mainAuthor = document.querySelector ('#main_author')

mainOptionCharacters.addEventListener('click', function(){
    
    mainOptionCharacters.style.backgroundColor = 'rgb(58, 19, 58)';
    mainOptionCharacters.style.color = 'rgb(255, 225, 255)';

    mainOptionTrivia.style.backgroundColor = 'rgb(96, 33, 96)';
    mainOptionTrivia.style.color = 'rgb(240, 146, 227)';
    
    mainOptionAuthor.style.backgroundColor = 'rgb(96, 33, 96)';
    mainOptionAuthor.style.color = 'rgb(240, 146, 227)';

    mainTrivia.style.display = 'none';
    mainCharacters.style.display = 'flex';
    mainAuthor.style.display = 'none'; 
});

mainOptionTrivia.addEventListener('click', function(){

    mainOptionTrivia.style.backgroundColor = 'rgb(58, 19, 58)';
    mainOptionTrivia.style.color = 'rgb(255, 225, 255)';
    
    mainOptionCharacters.style.backgroundColor = 'rgb(96, 33, 96)';
    mainOptionCharacters.style.color = 'rgb(240, 146, 227)';

    mainOptionAuthor.style.backgroundColor = 'rgb(96, 33, 96)';
    mainOptionAuthor.style.color = 'rgb(240, 146, 227)';

    mainTrivia.style.display = 'flex';
    mainCharacters.style.display = 'none';
    mainAuthor.style.display = 'none';
});

mainOptionAuthor.addEventListener('click', function(){
    mainOptionAuthor.style.backgroundColor = 'rgb(58, 19, 58)';
    mainOptionAuthor.style.color = 'rgb(255, 225, 255)';

    mainOptionCharacters.style.backgroundColor = 'rgb(96, 33, 96)';
    mainOptionCharacters.style.color = 'rgb(240, 146, 227)';

    mainOptionTrivia.style.backgroundColor = 'rgb(96, 33, 96)';
    mainOptionTrivia.style.color = 'rgb(240, 146, 227)';

    mainTrivia.style.display = 'none';
    mainCharacters.style.display = 'none';
    mainAuthor.style.display = 'flex';
})

// elementos interaccion 3

let authorDescription = document.querySelector ('#author_description')
let toogle = document.querySelector ('#toogle')
let toogle2 = document.querySelector ('#toogle2')
let toogleP = document.querySelector ('#toogle p')
let authorDescriptionP = document.querySelector ('#author_description p') 

toogleP.addEventListener('click', function(){
    authorDescription.style.width= '600px';
    authorDescriptionP.style.display= 'flex';
    toogleP.style.display = 'none';
    toogle2.style.display = 'flex';
});

toogle2.addEventListener ('click', function(){
    authorDescription.style.width= '0px';
    authorDescriptionP.style.display= 'none';
    toogleP.style.display = 'flex';
    toogle2.style.display = 'none';
});





