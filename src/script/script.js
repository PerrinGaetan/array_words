let membersPromo = [
    "anas",
    "anais",
    "antonia",
    "benjamin",
    "claire",
    "cristi",
    "cyril",
    "cecile",
    "daniel",
    "emma",
    "gaetan",
    "giovanny",
    "charlie",
    "julien",
    "kachiri",
    "laurie",
    "lionel",
    "loic",
    "leo",
    "malik",
    "maxime",
    "nicolas",
    "ryan",
    "sylvain",
    "thomas",
    "yohann"
]
// Generate dynamically number of div depending name's length:

const nameLines = document.getElementsByClassName('promoMember');
for (let i = 0; i < nameLines.length; i++){
    let nbDiv = nameLines[i].id.length;
    for (let j = 0; j < nbDiv; j++){
        nameLines[i].appendChild(document.createElement("input")).setAttribute("maxlength", 1);
        nameLines[i].lastChild.setAttribute("type", "text");
        nameLines[i].lastChild.setAttribute("data" , membersPromo[i][j]);
    }
}
let inputs = document.querySelectorAll('input[type="text"]');

// code to style's input
for (let i = 0; i < inputs.length; i++){

    inputs[i].addEventListener('change', function(Event){
        Event.preventDefault();
        inputs[i].setAttribute("class", 'writed');
        inputs[i].style.textAlign="center";
    })

}

// Verify the answers :
let result =[];
let results = [];
let isValid =[];
const verification = document.querySelector("input[value='verifier']");
const correctValue = document.querySelector(".promoMember");


verification.addEventListener("click", function(Event){
    Event.preventDefault();
    for (let name of nameLines){
        let length = name.children.length;
        for (let i = 0; i < length; i++){
            result.push(name.children[i].value);    
        }
        results.push(result)
        result = [];
    }
    let i = 0;
    for (let resultat of results){
       
        let nameInput = resultat.join("");
        // console.log(membersPromo[results.indexOf(resultat)]);

        if (nameInput == membersPromo[i]){

            isValid.push("yes");
        } else {
            isValid.push("no")
        }
        i++
        
    }
    if (isValid.includes("no")){
        alert("Loser")
    } else {
        alert("Well done")
    }
})
