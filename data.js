
// const bouton1 = document.querySelector('#bouton1');

// bouton1.addEventListener('click', function(){
//     fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
//         .then(response => response.json())
//         .then(data => {
//             let popup = window.open("", "popup", "width=800,height=800");
//             popup.document.write(JSON.stringify(data));
//         });
// });


// const bouton1 = document.querySelector('#bouton1');

// bouton1.addEventListener('click', function(){
//     fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
//         .then(response => response.json())
//         .then(data => {
//             let title = document.getElementById('title1')
            
//             let div = document.createElement("div");
//             for (let key in data) {
//                 let p = document.createElement("p");
//                 p.innerHTML = key + ": " + data[key];
//                 document.querySelector('.card-text').appendChild(div);
//             }
           
//         });
// });
let titre = document.getElementById("titre1");
let auth = document.getElementById("auth2");
let date = document.getElementById("date1");
let description = document.getElementById('description1');
let description2 = document.getElementById('description2');
let description3 = document.getElementById('description3');
let image1 = document.getElementById('imgdom');
const bouton1 = document.querySelector('#bouton1');

bouton1.addEventListener('click', function(){
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
        .then(response => response.json())
        .then(data => {
                
                titre.innerHTML = data.title
                date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
                description.innerHTML = data.content[0];
                description2.innerHTML = data.content[1];
                description3.innerHTML = data.content[2];
                image1.src = data.picture;
                image1.innerHTML 
        });
});

const bouton2 = document.querySelector('#bouton2');
bouton2.addEventListener('click', function(){
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
        .then(response => response.json())
        .then(data => {
                
                titre.innerHTML = data.title
                date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
                description.innerHTML = data.content[0];
                description2.innerHTML = data.content[1];
                description3.innerHTML = data.content[2];
                description4.innerHTML = data.content[3];
                image1.src = data.picture;
                image1.innerHTML 
        });
});


const bouton3 = document.querySelector('#bouton3');
bouton3.addEventListener('click', function(){
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=3')
        .then(response => response.json())
        .then(data => {
                titre.innerHTML = data.title
                date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
                description.innerHTML = data.content[0];
                description2.innerHTML = data.content[1];
                auth.innerHTML =  `Auteur: ${data.author.name} ${data.author.surname} ${data.author.position}`
                image1.src = data.picture;
                image1.innerHTML 
        });
});