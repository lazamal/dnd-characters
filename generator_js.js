// var attributes =[str,dex,con,int,wis,cha];
// var skills=[acrobatics,animal_handling,arcana,athletics,deception,history,insight,intimidation,investigation,midicine,
//     nature,perception,performance,persuation,religion,sleight_of_hand,stealth,survival];
// var i=1;
// var charlvl = 1;
// var skill={
//     name: toString(skills[0+1]);
//     ability_modifier: (attributes[1]-10/2);
//     proficiency_bonus: floor((charlvl-1)/4)+2;
// }


// const genhp = document.getElementById("genhp");
// const hp = document.getElementById("hp");
// genhp.addEventListener("click", generateRandomNumber);
// function generateRandomNumber() {
//     const randomnumber=Math.floor(Math.random()*100) +1;
// }
// hp.textContent="random  number"+ randomnumber;
// console.log(genhp,hp);

// function elementid () {
//   const button = document.getElementById("Diceroll")
//   const elementid= event.target.id;
// }
// console.log(elementid)



    // function STRDiceroll (dice, times) {
    //   const randomNumber = (Math.floor(Math.random() * dice) + 1)*times;
    //   document.getElementById('STR').value = randomNumber;
    //   };
  
    //   function DEXDiceroll (dice, times) {
    //     const randomNumber = (Math.floor(Math.random() * dice) + 1)*times;
    //     document.getElementById('DEX').value = randomNumber;
    //     };

    //     function CONDiceroll (dice, times) {
    //       const randomNumber = (Math.floor(Math.random() * dice) + 1)*times;
    //       document.getElementById('CON').value = randomNumber;
    //       };
  
    //       function INTDiceroll (dice, times) {
    //         const randomNumber = (Math.floor(Math.random() * dice) + 1)*times;
    //         document.getElementById('INT').value = randomNumber;
    //         };

    //         function WISDiceroll (dice, times) {
    //           const randomNumber = (Math.floor(Math.random() * dice) + 1)*times;
    //           document.getElementById('WIS').value = randomNumber;
    //           };

    //           function CHADiceroll (dice, times) {
    //             const randomNumber = (Math.floor(Math.random() * dice) + 1)*times;
    //             document.getElementById('CHA').value = randomNumber;
    //             };




    // Roll for specific attribute



  
function RollAttr (Attrinputid) {

  var rolls = [];

  for (let i = 0; i<4;i++) {
    rolls.push(Math.floor(Math.random()*6+1)) };
  var min = Math.min(...rolls);

  rolls.splice(rolls.indexOf(min),1);

  var sum = 0;
  for (let i = 0; i<rolls.length; i++) {
    sum += rolls[i];
  };

  document.getElementById(Attrinputid).value = sum;
};


// Roll for hp
  function HPDiceroll (dice, times) {
    const randomNumber =
     (Math.floor(Math.random() * dice) + 1)*times;
    document.getElementById('hp').value = randomNumber;
    };


// Save Data from form to local storage at the start of the session
const existingdata = localStorage.getItem("characters");
var characterarray = existingdata ? JSON.parse(existingdata) : [];

try { document.getElementById("char-generator-form").addEventListener('submit', function(event) {

event.preventDefault();

var player = document.getElementById('players-name').value;
var character_name= document.getElementById('character_name').value;
var age= document.getElementById('age').value;
var race= document.getElementById('race').value;
var classes = document.getElementById('classes').value;
var STR = document.getElementById('STR').value;
var DEX = document.getElementById('DEX').value;
var CON = document.getElementById('CON').value;
var INT = document.getElementById('INT').value;
var WIS = document.getElementById('WIS').value;
var CHA = document.getElementById('CHA').value;
var hp = document.getElementById('hp').value;
var background = document.getElementById('background').value;
var EquipmentStart = document.getElementById('EquipmentStart').value;
var origin = document.getElementById('origin').value;
var lvl = document.getElementById('lvl').value;



// save on Object



var newcharacterdata = {
  player: player,
  character_name: character_name,
  age: age,
  race: race,
  classes: classes,
  STR: STR,
  DEX: DEX,
  CON: CON,
  INT: INT,
  WIS: WIS,
  CHA: CHA,
  hp: hp,
  background: background,
  EquipmentStart: EquipmentStart,
  origin: origin, 
  lvl: lvl, 

  

};

// push new character to characterarray - the array which contains all characters

characterarray.push(newcharacterdata);

// Save to Local Storage

localStorage.setItem('characters', JSON.stringify(characterarray));

// reset form

document.getElementById('char-generator-form').reset();

const storedData = localStorage.getItem('characters');
const retrievedObj = JSON.parse(storedData);

// push data back into the array

characterarray=retrievedObj;

// sucess massage

console.log ('This Data is retrieved from the local storage');
console.log (characterarray);



});

}
catch (error) {
  // Handle the error gracefully
  console.error('An error occurred:', error.message);
}





// chanage the DOM practice

// present the last character created in the character-sheet
var textareaarray = document.getElementsByTagName('textarea');
console.log(textareaarray);
// textareaarray[0].innerHTML = characterarray[0].character_name;


document.getElementById('char-name').textContent = characterarray[0].character_name;
document.getElementById('char-class').textContent = characterarray[0].classes;
document.getElementById('char-race').textContent = characterarray[0].race;
document.getElementById('player-name').textContent = characterarray[0].player;
document.getElementById('char-lvl').textContent = characterarray[0].lvl;
document.getElementById('char-age').textContent = characterarray[0].age;
document.getElementById('background').textContent = characterarray[0].background;
document.getElementById('Strength').textContent = characterarray[0].STR;
document.getElementById('Dexterity').textContent = characterarray[0].DEX;
document.getElementById('Constitution').textContent = characterarray[0].CON;
document.getElementById('Wisdom').textContent = characterarray[0].WIS;
document.getElementById('Inteligence').textContent = characterarray[0].INT;
document.getElementById('Charisma').textContent = characterarray[0].CHA;
document.getElementById('maxhp').textContent = characterarray[0].hp;
document.getElementById('currenthp').textContent = characterarray[0].hp;
document.getElementById('temphp').textContent = characterarray[0].hp;
document.getElementById('equipment').textContent = characterarray[0].EquipmentStart;




// try {
// document.getElementsByClassName('char-name').getElementsByTagName('textarea').innerHTML = 1;
// }
// catch (error) {
//   // Handle the error gracefully
//   console.error('An error occurred:', error.message);
// }

