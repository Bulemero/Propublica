console.log(data);

var myTable = document.getElementById("myPrettyTable");


//a function needs to be created in order to build the table, and  then we will only need to define what parameters need to be added to the function depending on whether we want to display all data or only the filtered through checkboxes.


//element.addEventListener("click", myFunction);

//function myFunction() {
//alert ("Hello World!");
//}

function createMyTable(dataThatIWant) {
    

    //we create an empty table to avoid overriding the existing table.

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

createMyTable(data.results[0].members)


//we identify the values from the object array given by running an addEventListener method.

document.getElementById("myCheckboxD").addEventListener("click", function () {
    myPartyFilter()
});
document.getElementById("myCheckboxR").addEventListener("click", function () {
    myPartyFilter()
});
document.getElementById("myCheckboxI").addEventListener("click", function () {
    myPartyFilter()
});

//we create an empty array where we will store the selected values.
function myPartyFilter() {
    var selectedValues = [];
    var valuesChecked = [];
    var selectorCb = document.querySelectorAll("input:checked");
    
    for(var i = 0; i < selectorCb.length; i++){
        valuesChecked.push(selectorCb[i].value)
    }
    
    console.log(valuesChecked)
    dataThatIWant = data.results[0].members

    for (var i = 0; i < dataThatIWant.length; i++) {
        
       /* if(valuesChecked.includes(dataThatIWant[i].party) || valuesChecked.length == 0){
         selectedValues.push(dataThatIWant[i])
        }*/

       if (document.getElementById("myCheckboxD").checked && dataThatIWant[i].party == "D") {
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
        }
    }
    
    createMyTable(selectedValues)
}
