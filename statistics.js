//CREATE JSON OBJECT

var statistics = [
    {
        "Number of Democrats": displayValues("D"),
        "Number of Republicans": displayValues("R"),
        "Number of Independents": displayValues("I"),
        "Average 'Votes with party' for Democrats": 0,
        "Average 'Votes with party' for Republicans": 0,
        "Average 'Votes with party' for Independents": 0,
        "Least engaged names": 0,
        "Least engaged number of missed votes": 0,
        "Least engaged percentage tableLeastEngagedmissed votes": 0,
        "Most engaged names": 0,
        "Most engaged number of missed votes": 0,
        "Most engaged percentage of missed votes": 0,
        "Least loyal names": 0,
        "Least loyal number of votes": 0,
        "Least loyal percentage party votes": 0,
        "Most loyal names": 0,
        "Most loyal number of votes": 0,
        "Most loyal percentage party votes": 0,
        }
    ];

//CREATE VARIABLES

var rep = "R";
var dem = "D";
var ind = "I";


//CALL FUNCTIONS

console.log(data);



//DISPLAY FUNCTIONS


function displayValues(party) {

    var allMembers = data.results[0].members;
    var listOfValues = [];


    for (var i = 0; i < allMembers.length; i++) {

        if (allMembers[i].party == party) {
            listOfValues.push(allMembers[i]);
        }
    }
    

    var finalInfo = listOfValues.length;

    return finalInfo;
}

