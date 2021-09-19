let membersPromo = {
    "anas" : "anas.jpg",
    "anais": "anais.jpg",
    "antonia" : "antonia.jpg",
    "benjamin" : "benjamin.jpg",
    "claire" : "claire.jpg",
    "cristi": "cristi.jpg",
    "cyril" : "cyril.jpg",
    "cecile" : "cecile.jpg",
    "daniel" : "daniel.jpg",
    "emma" : "emma.jpg",
    "gaetan" : "gaetan.jpg",
    "giovanny" : "giovannuy.jpg",
    "charlie" : "charlie.jpg",
    "julien" : "julien.jpg",
    "kachiri": "kachiri.jpg",
    "laurie" : "laurie.jpg",
    "lionel" : "lionel.jpg",
    "loic" : "loic.jpg",
    "leo" : "leo.jpg",
    "malik" : "malik.jpg",
    "maxime" : "maxime.jpg",
    "nicolas" : "nicolas.jpg",
    "ryan" : "ryan.jpg",
    "sylvain" : "sylvain.jpg",
    "thomas" : "thomas.jpg",
    "yohann" : "yohann.jpg"
}
// Generate dynamically number of div depending name's length:

const nameLines = document.getElementsByClassName('promoMember');
for (let i = 0; i < nameLines.length; i++){
    let nbDiv = nameLines[i].id.length;
    for (let j = 0; j < nbDiv; j++){
        nameLines[i].appendChild(document.createElement("input")).setAttribute("maxlength", 1);
    }
}

let inputs = document.querySelectorAll('input');
console.log(inputs);


for (let i = 0; i < inputs.length; i++){

    inputs[i].addEventListener('change', function(Event){
        Event.preventDefault();
        inputs[i].setAttribute("class", 'writed');
        inputs[i].style.textAlign="center";
    })

}
