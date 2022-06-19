let count = 0;

document.getElementById('add').addEventListener('click', function (e) {
    // console.log('Hello Bro'); //click korle show kore
    count = count + 1;
    // console.log(count); //1,2,3 kore bartese
    document.getElementById('count').innerText = count;
});

document.getElementById('minus').addEventListener('click', function (e) {
    count = count - 1;
    document.getElementById('count').innerText = count;
})
//app2 te etake function er modhe add krbo