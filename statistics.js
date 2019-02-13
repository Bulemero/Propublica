//CREATE JSON OBJECT

var statistics = [
    {
        "Number of Democrats": 0,
        "Number of Republicans": 0,
        "Number of Independents": 0,
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
var keyValues = data.results[0].members[i];
var listOfValues = [];

//CALL FUNCTIONS

console.log(statistics);



//DISPLAY FUNCTIONS


function displayValues() {
    for (var i = 0; i < statistics.length; i++) {

        console.log(statistics["Number of Republicans"]);
    }
}
displayValues(keyValues);


