let count = 0;

// document.getElementById('add').addEventListener('click', ); 
//click er aag porjnto kaj,onclick e kore dibe
function add(e) {
    count++;
    control('count');
}

function minus(e) {
    // count--;
    // control('count');
    if (count > 0) {
        count--;
        control('count');
    }
}



function control(id) {
    document.getElementById(id).innerText = count;
    // console.log(id);
}