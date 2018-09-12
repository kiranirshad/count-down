let count = 0;
countUp = function(){
    count++;
    let counting = document.querySelector("div");
    counting.innerHTML = count;
}
setInterval(countUp, 2000);

