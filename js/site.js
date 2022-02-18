//get values from the user. We need to get the fizz and the fuzz value.
function getValues(){

    //get the user values from the page

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //validating user's input

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue))
        {

            //call fizzBuzz
            let fbArray = fizzBuzz(fizzValue, buzzValue);

            displayData(fbArray);

        }
        else{
            alert("You must enter an integer.");
        }
}

function fizzBuzz(fizzValue, buzzValue)
{
    let returnArray = [];

    for (let i = 1; i <= 100; i++){

        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('FizzBuzz');
        } else if(i % fizzValue == 0){
            returnArray.push('Fizz');
        } else if(i % buzzValue == 0){
            returnArray.push('Buzz');
        } else{
            returnArray.push(i);
        }

    }
     return returnArray;

}

function fizzBuzzB(fizzValue,buzzValue){

    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {

        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch(true)
        {
            case Fizz && Buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz:{
                returnArray.push('Fizz');
                break;
            }
            case Buzz:{
                returnArray.push('Buzz');
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
        
        
    }
    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue){
    for (let i = 1; i <= 100; i++) {
        
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz': '') ||  i );
        returnArray.push(value);
        
    }

    return returnArray;
}

function displayData(fbArray){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("fbTemplate")

    //clear table first
    tableBody.innerHTML = "";
    
    for (let i = 0; i < fbArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab just the tds
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].textContent = fbArray[i+1];
        rowCols[1].classList.add(fbArray[i+1]);

        rowCols[2].textContent = fbArray[i+2];
        rowCols[2].classList.add(fbArray[i+2]);

        rowCols[3].textContent = fbArray[i+3];
        rowCols[3].classList.add(fbArray[i+3]);

        rowCols[4].textContent = fbArray[i+4];
        rowCols[4].classList.add(fbArray[i+4]);

        tableBody.appendChild(tableRow);

    }
    //add all the rows to the table
}