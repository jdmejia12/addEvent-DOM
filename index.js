// Your code here
let dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4';
document.addEventListener('keydown', function(e){
    if(e.key==='ArrowLeft'){
        left = parseInt(dodger.style.left)
        movedLeft = left - (50)
        dodger.style.left = movedLeft+'px'
        console.log(dodger.style.left)
    }
    if(e.key==='ArrowRight'){
        left = parseInt(dodger.style.left)
        movedRight = left + (50)
        dodger.style.left = movedRight+'px'
        console.log(dodger.style.left)
    }
    if(e.key==='ArrowDown'){
        bottom = parseInt(dodger.style.bottom)
        movedDown = bottom - (50)
        dodger.style.bottom = movedDown+'px'
        console.log(dodger.style.bottom)
    }
    if(e.key==='ArrowUp'){
        bottom = parseInt(dodger.style.bottom)
        movedUp = bottom + (50)
        dodger.style.bottom = movedUp+'px'
        console.log(dodger.style.bottom)
    }
})
