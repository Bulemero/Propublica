//CREATE VARIABLES

var myTable = document.getElementById("myPrettyTable");
var dataThatIWant = data.results[0].members;
var dropdownStates = [];
var selectedValues = [];
var valuesChecked = [];
var checkDropdown = document.getElementById("stateFilter").value;
//var newInfo = data.results[0].members;
//var noDupl = [];
//var nonRepeatedStates = [];



//CALL FUNCTIONS

console.log(data);
createMyTable(dataThatIWant);
addingListeners();
populateStatesDropdown();


//DISPLAY FUNCTIONS

function createMyTable(dataThatIWant) {


    //line below is a reset of information

    document.getElementById("myPrettyTable").innerHTML = " ";

    for (var i = 0; i < dataThatIWant.length; i++) {

        var fName = dataThatIWant[i].first_name;
        var lName = dataThatIWant[i].last_name;
        var mName = dataThatIWant[i].middle_name || " ";

        var fullName = lName + ", " + mName + " " + fName;

        var webPage = fullName.link(dataThatIWant[i].url);


        var row = document.createElement("tr");

        row.insertCell().innerHTML = webPage;
        row.insertCell().innerHTML = dataThatIWant[i].party;
        row.insertCell().innerHTML = dataThatIWant[i].state;
        row.insertCell().innerHTML = dataThatIWant[i].seniority;
        row.insertCell().innerHTML = dataThatIWant[i].votes_with_party_pct + "%";


        myTable.append(row);

    }

}


function addingListeners() {

    document.getElementById("myCheckboxR").addEventListener("click", function () {
        myPartyFilter()
    });
    document.getElementById("myCheckboxD").addEventListener("click", function () {
        myPartyFilter()
    });
    document.getElementById("myCheckboxI").addEventListener("click", function () {
        myPartyFilter()
    });

    document.getElementById("stateFilter").addEventListener("change", function () {
        myPartyFilter()

    });

}


function myPartyFilter() {
    var selectedValues = [];
    var valuesChecked = [];
    var selectorCb = document.querySelectorAll("input:checked");


    for (var i = 0; i < selectorCb.length; i++) {
        valuesChecked.push(selectorCb[i].value)
    }

    console.log(valuesChecked);
    
    var newInfo = data.results[0].members

    for (var i = 0; i < newInfo.length; i++) {

        if (valuesChecked.includes(newInfo[i].party) || valuesChecked.length == 0) {
            selectedValues.push(newInfo[i])
        }

        /*if (document.getElementById("myCheckboxD").checked && dataThatIWant[i].party == "D") {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }

        if (document.getElementById("myCheckboxR").checked && dataThatIWant[i].party == "R") {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }

        if (document.getElementById("myCheckboxI").checked && dataThatIWant[i].party == "I") {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }

        if (document.getElementById("myCheckboxD").checked == false && document.getElementById("myCheckboxR").checked == false &&
            document.getElementById("myCheckboxI").checked == false) {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }*/
    }

    myStateFilter(selectedValues)
}


function populateStatesDropdown() {

    var dropdown = document.getElementById("stateFilter")

    var noDupl = [];
    var nonRepeatedStates = [];

    for (var i = 0; i < data.results[0].members.length; i++) {

        if (!nonRepeatedStates.includes(data.results[0].members[i].state)) {
            nonRepeatedStates.push(data.results[0].members[i].state);
        }

    }

    nonRepeatedStates.sort();


    for (var k = 0; k < nonRepeatedStates.length; k++) {
        var option = document.createElement("option");
        option.innerHTML = nonRepeatedStates[k];

        dropdown.append(option);
    }

    console.log(nonRepeatedStates);

}


function myStateFilter(dataThatIWant) {

    var dropdownStates = [];

    var checkDropdown = document.getElementById("stateFilter").value;

    for (var i = 0; i < dataThatIWant.length; i++) {


        if (checkDropdown == dataThatIWant[i].state || checkDropdown == "All") {
            dropdownStates.push(dataThatIWant[i])
        }
        console.log(dropdownStates);
    }

    /*if (nonRepeatedStates.includes(newInfo.state) || (valuesChecked.length == 0)) {
        return true
    } else {
        return false
    }*/


    createMyTable(dropdownStates);

}


