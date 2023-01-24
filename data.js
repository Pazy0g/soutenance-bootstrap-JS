// Creating var for API using
let titre = document.getElementById("titre1");
let auth = document.getElementById("auth2");
let date = document.getElementById("date1");
let description = document.getElementById('description1');
let description2 = document.getElementById('description2');
let description3 = document.getElementById('description3');
let image1 = document.getElementById('imgdom');
let h5News1 = document.getElementById('montitre1');
let NewP1 = document.getElementById('MyNewP');
let NewAuthor = document.getElementById('MyNewAutor');
const bouton1 = document.querySelector('#bouton1');
let h5News2 = document.getElementById('montitre2')
let NewP2 = document.getElementById('MyNewP2')
let NewAuthor2 = document.getElementById('MyNewAutor2')
                        //CODE NON FACTORISER

// document.addEventListener('DOMContentLoaded', function(){
//         fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
//         .then(response => response.json())
//         .then(data => {
//                 h5News1.innerHTML= data.title;
//                 NewP1.innerHTML= `Date : ${data.date.day} ${data.date.month} ${data.date.year}`;
//                 NewAuthor.innerHTML= `Auteur : ${data.author.name} ${data.author.surname} ${data.author.position}`;
//         })
//         .catch(error => {
//                 console.log(error);
                
//                 });
       
// });

// document.addEventListener('DOMContentLoaded', function(){
//         fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
//         .then(response => response.json())
//         .then(data => {
//                 h5News2.innerHTML= data.title;
//                 NewP2.innerHTML= `Date : ${data.date.day} ${data.date.month} ${data.date.year}`
//                 NewAuthor2.innerHTML= `Auteur : ${data.author.name} ${data.author.surname} ${data.author.position}`
//         })
//         .catch(error => {
//                 console.log(error);
                
//                 });
// });

        



// // Creating EventListener function using fetch
// bouton1.addEventListener('click', function(){
//     fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
//         .then(response => response.json())
//         .then(data => {
                
//                 titre.innerHTML = data.title
//                 date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
//                 description.innerHTML = data.content[0];
//                 description2.innerHTML = data.content[1];
//                 description3.innerHTML = data.content[2];
//                 image1.src = data.picture;
//                 image1.innerHTML 
//                 titleNwStyle();
//         })
//         .catch(error => {
//                 console.log(error);
                
//                 });
// });

// // Repeating for each
// const bouton2 = document.querySelector('#bouton2');
// bouton2.addEventListener('click', function(){
//     fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
//         .then(response => response.json())
//         .then(data => {
                
//                 titre.innerHTML = data.title
//                 date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
//                 description.innerHTML = data.content[0];
//                 description2.innerHTML = data.content[1];
//                 description3.innerHTML = data.content[2];
//                 description4.innerHTML = data.content[3];
//                 image1.src = data.picture;
//                 image1.innerHTML 
                
//                 titleNwStyle();
//         })
//         .catch(error => {
//                 console.log(error);
                
//                 });
// });
                                // CODE FACTORISER

function getData(articleId) {
        return fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${articleId}`)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            })
    }
    
    // Chargement de la page
    document.addEventListener('DOMContentLoaded', function(){
        getData(1)
            .then(data => {
                h5News1.innerHTML= data.title;
                NewP1.innerHTML= `Date : ${data.date.day} ${data.date.month} ${data.date.year}`;
                NewAuthor.innerHTML= `Auteur : ${data.author.name} ${data.author.surname} ${data.author.position}`;
            })
           
        getData(2)
            .then(data => {
                h5News2.innerHTML= data.title;
                NewP2.innerHTML= `Date : ${data.date.day} ${data.date.month} ${data.date.year}`
                NewAuthor2.innerHTML= `Auteur : ${data.author.name} ${data.author.surname} ${data.author.position}`
            })
            
    });
    
    bouton1.addEventListener('click', function(){
        getData(1)
            
            .then(data => {
                    
                    titre.innerHTML = data.title
                    date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
                    description.innerHTML = data.content[0];
                    description2.innerHTML = data.content[1];
                    description3.innerHTML = data.content[2];
                    image1.src = data.picture;
                    image1.innerHTML 
                    titleNwStyle();
                    
            })
    });

    bouton2.addEventListener('click', function(){
        getData(2)
            
            .then(data => {
                    
                    titre.innerHTML = data.title
                    date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
                    description.innerHTML = data.content[0];
                    description2.innerHTML = data.content[1];
                    description3.innerHTML = data.content[2];
                    description4.innerHTML = data.content[3];
                    image1.src = data.picture;
                    image1.innerHTML 
                    
                    titleNwStyle();
            })
    });

// Style changing function
function titleNwStyle(){
        // Changing css dynamicly
        titre.style.color="red"
        titre.style.fontSize="1.5rem";
        titre.onmouseover = function(){
                this.style.color="blue"
                this.style.cursor="pointer"
                
        }
        titre.onmouseout = function(){
                this.style.color="red"
        }

        image1.style.border="thick solid grey"
}

// Selecting body element
const body = document.querySelector("body");

// Hiding the body using the 'CSS' 0% opacity attribute
body.style.opacity = 0;

// Using event DOMContentLoaded to start the animation once the DOM is loaded completely
document.addEventListener("DOMContentLoaded", function() {
  // Using a function to gradually upscale the body opacity
  let fadeIn = setInterval(function() {
    if (body.style.opacity < 1) {
      body.style.opacity = Number(body.style.opacity) + 0.5;
    } else {
      clearInterval(fadeIn);
    }
  }, 100);
});


let submit = document.getElementById('submitButton');
let label = document.getElementById('labelCheck');
let acceptance = document.getElementById('myCheck');
let check = document.getElementById('myCheck');

// Function for the catalog subing
acceptance.addEventListener("change", function() {
if (this.checked) {
label.style.color = "green";
submit.style.display = "block";
} else {
label.style.color = "red";
submit.style.display = "none";
}
});
let mail 
check.addEventListener('click', function() {
 mail = document.getElementById('mail').value;
let responsePb = document.getElementById('researchPb');
if (mail.length < 5) {
responsePb.innerHTML = "Votre email doit comporter au moins 5 Caractères";
submit.style.visibility = "hidden";

}
else {
responsePb.innerHTML="";
submit.style.visibility = "visible";
}
});