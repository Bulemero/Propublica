console.log(data);

var dataThatIWant = data.results[0].members;
var myTable = document.getElementById("myPrettyTable");


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
