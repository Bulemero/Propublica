//CREATE JSON OBJECT

var statistics = [
    {
        "Number of Democrats": displayValues("D"),
        "Number of Republicans": displayValues("R"),
        "Number of Independents": displayValues("I"),
        "Total Senate Memberrs": totalMembers,
        "Average 'Votes with party' for Democrats": getPctVotes("D"),
        "Average 'Votes with party' for Republicans": getPctVotes("R"),
        "Average 'Votes with party' for Independents": getPctVotes("I"),
        "Total Average 'Votes with party' Senate": showTotalAveragePct(),
        /*"Least engaged names": 0,
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
        "Most loyal percentage party votes": 0,*/
        }
    ];

//CREATE VARIABLES

var rep = "R";
var dem = "D";
var ind = "I";
var totalMembers = displayValues("I") + displayValues("R") + displayValues("D");

/*
var avVotesWPartyD = (displayValues("D")/totalMembers)*100;
var avVotesWPartyR = (displayValues("R")/totalMembers)*100;
var avVotesWPartyI = (displayValues("I")/totalMembers)*100;
*/

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


function getPctVotes(party) {
    var totalPartySenators = displayValues(party);
    var allMembers = data.results[0].members;
    var pctArray = [];
    var totalVotesArray = [];
    var sumUp = 0;

    for (var i = 0; i < allMembers.length; i++) {

        if (allMembers[i].party == party) {
            pctArray.push(allMembers[i]);
        }
    }

    for (var i = 0; i < pctArray.length; i++) {

        totalVotesArray.push(pctArray[i].votes_with_party_pct)

        sumUp = sumUp + totalVotesArray[i];

    }
    
    var averagePctTotal = sumUp/totalPartySenators;
    var roundPcts = averagePctTotal.toFixed();
    
    return roundPcts;
    
}

function showTotalAveragePct () {
    var allMembers = data.results[0].members;
    var averagePctArray = [];
    var sumUp = 0;
    
    for (var i = 0; i < allMembers.length; i++) {
        
        averagePctArray.push(allMembers[i].votes_with_party_pct)
        
        sumUp = sumUp + averagePctArray[i];
        
    }
    
    var totalPctSenators = sumUp/averagePctArray.length;
    var roundPcts = totalPctSenators.toFixed();
    
    return roundPcts;
    
}




