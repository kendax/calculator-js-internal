// A variable holding a boolean value and which indicates if the input box holds a result
let resultDisplayed = false;

// Insert values into the input box
function appendDisplay(value) {
    var expression = document.querySelector('input');
    var operator = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var hasOperator = operator.test(value);
    // If there is 
    if ((hasOperator && resultDisplayed) || !resultDisplayed) {
        expression.value += value;
        resultDisplayed = false;
    } else {
        expression.value = value;
        resultDisplayed = false;
    }
}

// Erase the everything in the input box
function clearDisplay() {
    var expression = document.querySelector('input');
    expression.value = '';
    resultDisplayed = false;
}

// handle deleting of individual values
function Delete() {
    var expression = document.querySelector('input');
    expression.value = expression.value.slice(0, -1);
}

// evaluate the contents of the input to give a result
function calculate() {
    var expression = document.querySelector('input');
    let result = '';
    // If the input box is empty, any clicks of the 'Equals' button will display nothing 
    if (expression.value == '') {
        expression.value = '';
        return;
    }
    /*If the input box displays an error message, continue displaying that message for any subsequent
    clicks of the 'Equals' button until the user clears the input box
    */
    if (expression.value == 'Error') {
        expression.value = 'Error';
        return;
    }
    // Evaluate the contents of the input box
    try {
        result = eval(expression.value);
    }catch (error) { // catch all errors and display 'Error' in the input
        result = 'Error';
    }
    expression.value = result;
    resultDisplayed = true;
}
