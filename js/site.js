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
    returnArray;

}

function displayData(fbArray){

    //loop over the array and create a tablerow for each item

    //add all the rows to the table
}