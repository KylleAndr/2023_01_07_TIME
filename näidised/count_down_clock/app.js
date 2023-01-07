const timeH = document.querySelector('#LiikuvTaimer'); //html-ga ühendamine

let timeSecond = 150; // def algaja - see mida minul arvutab ajavahe

timeH.innerHTML = `00:${timeSecond}`; //??

const countDown = setInterval (()=> {
    timeSecond--;
displayTime(timeSecond);   
    if(timeSecond <= 0 || timeSecond < 1) {
        clearInterval(countDown);
    }
},1000)

function displayTime(second){
    const min = Math.floor(second  /60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML=`${min<10 ? '0': ''}${min}:${sec}`
}