  // Enable strict mode
"use strict";

// check that JS loaded 
console.log("sales_tax.js is loaded!");

const $ = selector => document.querySelector(selector);

// In this exercise, you’ll develop an application that calculates the sales tax and invoice
// total after the user enters the subtotal and tax rate.

// 1. Download the zip file on canvas. It will contain an html file already linked to a css file and js file that are also provided. Make sure to save them all in the same folder. Then, run the application to see the user interface shown above, although that interface won’t do anything until you develop the JavaScript for it.

// Confirmed interface is showned  

// 2. In the JavaScript file, note that the $() function has been coded for you. It gets the object for the HTML element that’s specified by the CSS selector.

// Confirmed 

// 3. Code an event handler function named processEntries() that gets the user entries, calculates the sales tax and total, and displays those results in the text boxes.


function processEntries() {
    // check process function is trigger
    console.log("processEntries function triggered."); 

    // Focus on the Subtotal input field when the user clicks Calculate
    $("#subtotal").focus();

    // Log the raw input field elements to check 
    console.log($("#subtotal"));
    console.log($("#tax_rate"));

    // parse floar the string to a number that can be a decimal
    const inputSubtotal =  parseFloat ($("#subtotal").value); 
    console.log(inputSubtotal);

    const inputTaxrate = parseFloat ($("#tax_rate").value); 
    console.log(inputTaxrate);


    //5. Add data validation to the processEntries() function. 

//  The subtotal entry should be a valid, positive number that’s less than 10,000.
    // validation for subtotal entry
    if (isNaN(inputSubtotal) || inputSubtotal <= 0 || inputSubtotal >= 10000 ) {
        // the error messages should be: Subtotal must be > 0 and < 10000
        alert("Error: Subtotal must be > 0 and < 10000");
        // Move focus back to Subtotal if there's an error
        $("#subtotal").focus(); 
        return;
    }

// The tax rate should be a valid, positive number that’s less than 12.
    // validation for taxrate entry
    if (isNaN(inputTaxrate) || inputTaxrate <= 0 || inputTaxrate >= 12 ){
        console.log (inputTaxrate);
        // the error messages should be: Subtotal must be > 0 and < 12
        alert("Error: Tax Rate must be > 0 and < 12" );
        // Move focus back to tax rate  if there's an error
        $("#tax_rate").focus();
        return;
    }    

    // Calculate Sales Tax and Total
    const salesTax = inputSubtotal * (inputTaxrate / 100);
    const total = inputSubtotal + salesTax;

    console.log("Sales Tax:", salesTax.toFixed(2));
    console.log("Total:", total.toFixed(2)); 

    // displays results in its proper input field, and rounds two decimal places 

    $("#sales_tax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2); 

    }

    function clearText (){

        // clears the text box by setting it to a blank string
        $("#subtotal").value = "";  
        $("#tax_rate").value = "";
        $("#sales_tax").value = "";
        $("#total").value = "";
     
        // Move focus back to Subtotal
         $("#subtotal").focus();

    }


    // 4. Code a DOMContentLoaded event handler that attaches the processEntries() function to the click event of the Calculate button. Then, test what you have so far.
    // tested had to debugged but good now


    // Add event listener for DOMContentLoaded to ensure elements are loaded
    document.addEventListener("DOMContentLoaded", () => {
        // check that page loaded and running 
        console.log("DOM fully loaded."); 

        // Attach the processEntry function to the "click" event of the "Calculate" button
         // Focus on the Subtotal field when the page loads
        $("#subtotal").focus();

        // event listener for click to start the functions processEntries and clearText
        $("#calculate").addEventListener("click", processEntries);
        $("#clear").addEventListener("click", clearText);
        
    });



// 6. Add JavaScript that moves the cursor to the Subtotal field when the application starts and when the user clicks on the Calculate button.

// Good, added for tax rate too when erroring out

// 7. Add the event handler for the click event of the Clear button. This event handler should clear all text boxes and move the cursor to the Subtotal field.

// test we guchi 

// 8. Add event handlers for the click events of the Subtotal and Tax Rate text boxes. Each handler should clear the data from the text box. Update the event handler for the Clear button to call these functions as well (to reduce code duplication).

// added check 


// 9. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your application. Make sure you test it before submitting the lin