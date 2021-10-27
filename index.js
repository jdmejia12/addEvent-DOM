// Your code here
let dodger = document.getElementById('dodger')
//------------Horizontal Function-----------//
dodger.style.backgroundColor = '#FF69B4';
function moveDodgerLeft (){
    left = parseInt(dodger.style.left)
    movedLeft = left - (5)
    if(left>0){
        dodger.style.left = movedLeft+'px'
        console.log(dodger.style.left)
    }
}

function moveDodgerRight (){
    left = parseInt(dodger.style.left)
    movedRight = left + (5)
    if(left<380){
        dodger.style.left = movedRight+'px'
        console.log(dodger.style.left)
    }
}
//------------Horizontal Function-----------//

//------------Vertical Function-----------//
function moveDodgerDown (){
    bottom = parseInt(dodger.style.bottom)
    movedDown = bottom - (5)
    if(bottom>0){
        dodger.style.bottom = movedDown+'px'
        console.log(dodger.style.bottom)
    }
}

function moveDodgerUp (){
    bottom = parseInt(dodger.style.bottom)
    movedDown = bottom + (5)
    if(bottom<380){
        dodger.style.bottom = movedDown+'px'
        console.log(dodger.style.bottom)
    }
}
//------------Vertical Function-----------//



//------------Horizontal-----------//
document.addEventListener('keydown', function(e){
    if(e.key==='ArrowLeft'){
        moveDodgerLeft();
}})

document.addEventListener('keydown', function(e){
    if(e.key==='ArrowRight'){
        moveDodgerRight();
}})

//------------Vertical-----------//
document.addEventListener('keydown', function(e){
    if(e.key==='ArrowDown'){
        moveDodgerDown();
}})

document.addEventListener('keydown', function(e){
    if(e.key==='ArrowUp'){
        moveDodgerUp();
}})


// left = parseInt(dodger.style.left)
// movedLeft = left - (1)
// dodger.style.left = movedLeft+'px'
// console.log(dodger.style.left)
// }
// if(e.key==='ArrowRight'){
// left = parseInt(dodger.style.left)
// movedRight = left + (1)
// dodger.style.left = movedRight+'px'
// console.log(dodger.style.left)
// }
// if(e.key==='ArrowDown'){
// bottom = parseInt(dodger.style.bottom)
// movedDown = bottom - (1)
// dodger.style.bottom = movedDown+'px'
// console.log(dodger.style.bottom)
// }
// if(e.key==='ArrowUp'){
// bottom = parseInt(dodger.style.bottom)
// movedUp = bottom + (1)
// dodger.style.bottom = movedUp+'px'
// console.log(dodger.style.bottom)
// }}