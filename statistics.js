//CREATE JSON OBJECT

var statistics = [
    {
        "Number of Democrats": totalDemocrats,
        "Number of Republicans": totalRepublicans,
        "Number of Independents": totalIndependents,
        "Total Senate Members": totalMembers,
        "Average 'Votes with party' for Democrats": averageDemocrats,
        "Average 'Votes with party' for Republicans": averageRepublicans,
        "Average 'Votes with party' for Independents": averageIndependents,
        "Total Average 'Votes with party' Senate": averageSenators,
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

var dem = "D";
var rep = "R";
var ind = "I";

var totalDemocrats = displayValues("D");
var totalRepublicans = displayValues("R");
var totalIndependents = displayValues("I");
var totalMembers = displayValues("I") + displayValues("R") + displayValues("D");

var averageDemocrats = getPctVotes("D");
var averageRepublicans = getPctVotes("R");
var averageIndependents = getPctVotes("I");
var averageSenators = showTotalAveragePct();

var myNewTable = document.getElementById("myAmazingTable");
var dataThatIWant = data.results[0].members;

var myVueObject = new Vue({
    el: "#app",
    data: {
        key: "FWHJZ1xefU7G9fkBIhnV9o021FA3btC0nLKaMjIT",
        url: "https://api.propublica.org/congress/v1/113/senate/members.json",
        names: [
            {
                party: "Democrats",
                NumberOfReps: totalDemocrats,
                pctVotedParty: averageDemocrats + "%"
            },
            {
                party: "Republicans",
                NumberOfReps: totalRepublicans,
                pctVotedParty: averageRepublicans + "%"
            },
            {
                party: "Independents",
                NumberOfReps: totalRepublicans,
                pctVotedParty: averageIndependents + "%"
            },
            {
                party: "Total",
                NumberOfReps: totalMembers,
                pctVotedParty: averageSenators + "%"
            }
    ]
    },
    methods: {

    }

});

//CALL FUNCTIONS

console.log(data);
//createAnotherTable(dataThatIWant);

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

    var averagePctTotal = sumUp / totalPartySenators;
    var roundPcts = averagePctTotal.toFixed();

    return roundPcts;

}


function showTotalAveragePct() {
    var allMembers = data.results[0].members;
    var averagePctArray = [];
    var sumUp = 0;

    for (var i = 0; i < allMembers.length; i++) {

        averagePctArray.push(allMembers[i].votes_with_party_pct)

        sumUp = sumUp + averagePctArray[i];

    }

    var totalPctSenators = sumUp / averagePctArray.length;
    var roundPcts = totalPctSenators.toFixed();

    return roundPcts;

}


/*function createAnotherTable(dataThatIWant) {

        var row = document.createElement("tr");
        var roy = document.createElement("tr");
        var rox = document.createElement("tr");
        var roz = document.createElement("tr");

        row.insertCell().innerHTML = "Democrats";
        row.insertCell().innerHTML = displayValues("D");
        row.insertCell().innerHTML = getPctVotes("D")+ "%";
    
        roy.insertCell().innerHTML = "Republicans";
        roy.insertCell().innerHTML = displayValues("R");
        roy.insertCell().innerHTML = getPctVotes("R")+ "%";
    
        rox.insertCell().innerHTML = "Independents";
        rox.insertCell().innerHTML = displayValues("I");
        rox.insertCell().innerHTML = getPctVotes("I")+ "%";
    
        roz.insertCell().innerHTML = "Total";
        roz.insertCell().innerHTML = totalMembers;
        roz.insertCell().innerHTML = showTotalAveragePct()+ "%";


        myNewTable.append(row, roy, rox, roz);

}
*/



