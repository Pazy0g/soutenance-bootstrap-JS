
// const bouton1 = document.querySelector('#bouton1');

// bouton1.addEventListener('click', function(){
//     fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
//         .then(response => response.json())
//         .then(data => {
//             let popup = window.open("", "popup", "width=800,height=800");
//             popup.document.write(JSON.stringify(data));
//         });
// });


const bouton1 = document.querySelector('#bouton1');

bouton1.addEventListener('click', function(){
    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
        .then(response => response.json())
        .then(data => {
            let popup = window.open("", "popup", "width=800,height=800");
            let div = document.createElement("div");
            for (let key in data) {
                let p = document.createElement("p");
                p.innerHTML = key + ": " + data[key];
                div.appendChild(p);
            }
            popup.document.body.appendChild(div);
        });
});
