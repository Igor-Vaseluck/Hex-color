
const btn = document.querySelector('.btn')

function randomColor(){
    let arrayColor = ["0","1","2", "3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let hexColor = ''
    for(let i=0; i<6; i++){
        let random = Math.floor(Math.random()*arrayColor.length)
        hexColor += arrayColor[random]
    }
    
    document.getElementById("color").innerHTML = hexColor
    document.querySelector("body").style.background = '#'+ hexColor
}
btn.addEventListener('click', randomColor)