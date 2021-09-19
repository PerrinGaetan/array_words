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

const nameLines = document.getElementsByClassName('promoMember');
for (let line in nameLines){
    let nbDiv = nameLines[line].id.length;
    for (let i = 0; i < nbDiv; i++){
        nameLines[line].appendChild(document.createElement("div"));
    }
}