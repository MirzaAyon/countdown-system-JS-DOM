let count = 0;

document.getElementById('add').addEventListener('click', function (e) {

    // count = count + 1;
    count++;
    control('count');
});

document.getElementById('minus').addEventListener('click', function (e) {
    // count = count - 1;
    count--;
    control('count');
})

function control(id) {
    document.getElementById(id).innerText = count;
    // console.log(id);
}




// control('bro');
// function control(id) {
//     console.log(id);
// } //bro print hbe
