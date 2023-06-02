let a = document.getElementById('text')
console.log(a)

let b = document.getElementsByTagName('h1')
console.log(b)

let c = document.getElementsByClassName('box')
console.log(c)

let Heading = document.getElementsByClassName('Heading')
console.log(Heading[0].innerHTML)
// Heading[0].innerHTML = 'Hello World'

Heading[0].addEventListener('click', () =>{
    Heading[0].innerHTML = 'Hello World';
})

let replacetext = document.getElementsByClassName('replacetext')

function button(){
    replacetext[0].innerHTML = 'Welcome to Elevation Academy'
}

let heading = document.getElementById('heading')
console.log(heading.innerHTML)
heading.style.color = 'red'

// heading[0].addEventListener('click', () =>{
//     heading[0].style.color = 'red'
// })

let parent = document.querySelector('.parent');
let count = true;
function changeDirection(){
    if(count){
    parent.style.display = 'block'
    count = false;
}
else{
    parent.style.display = 'flex'
    count = true;
}
}

let display = document.querySelectorAll('h1')
display[3].addEventListener('click' , () =>{
    function startClock(){
        let time = new Date();

        let hrs = time.getHours()
        let mins = time.getMinutes()
        let secs = time.getSeconds()
        let AMPM = "PM"

        if(hrs <12){
            hrs +=12;
            AMPM = "AM"
        }

        console.log(`Time : ${hrs}:${mins}:${secs} ${AMPM}`)
        display[3].innerHTML = `${hrs}:${mins}:${secs} ${AMPM}`
    }
    setInterval(() =>{
        startClock();
    },1000)
})
