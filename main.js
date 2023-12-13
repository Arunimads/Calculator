//output
function result() {
    Display.value = eval(Display.value);
}

//handling with digits
function calc(num) {
    let DisplayTxt = Display.value;
    if (DisplayTxt.startsWith('0.')) {
        Display.value = num;
    }
    else if  (DisplayTxt.startsWith('0')) {
        Display.value = num;
    }
    else {
        Display.value += num;
    }
}
//dot handling

function Dot(dot) {
    var display = document.getElementById('Display');
    var lastInput = display.value.slice(-1);

    
    if (lastInput !== '.' || !display.value.includes('.')) {
        display.value += dot;
    }
}





//Zero handling
function Zero() {
    let DisplayTxt = Display.value;
    if (DisplayTxt.startsWith('0')) {
        Display.value += '';
    }
    else {
        Display.value += '0';
    }
}

// clear display
function Clear() {
    
    document.getElementById('Display').value = '';
}

//operators handling

function operator(op) {
    console.log(op)
    var display = document.getElementById('Display');
    var lastChar = display.value.slice(-1);
    
    // console.log(lastChar)
    
    if (isOperator(lastChar)) {
        //console.log(lastChar)
        display.value = display.value.slice(0, -1) + op;
    
        // console.log(display.value)
            
    } 
    
    else {
        display.value += op;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// clear display

function back() {
    let currentValue = document.getElementById('Display').value;
    document.getElementById('Display').value = currentValue.slice(0, -1);
}

