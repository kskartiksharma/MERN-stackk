function display(a) {
    document.getElementById("result").value += a
    // a is value here
}

//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}


function clr() {
    document.getElementById("result").value = ""
}