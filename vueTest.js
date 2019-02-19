var myVueObject = new Vue({
    el: "#app",
    data: {

        key: "FWHJZ1xefU7G9fkBIhnV9o021FA3btC0nLKaMjIT",
        url: "https://api.propublica.org/congress/v1/113/senate/members.json",
        members: [],
        names: [
            {
                party: "Democrats",
                NumberOfReps: "totalDemocrats",
                pctVotedParty: "averageDemocrats"
            },
            {
                party: "Republicans",
                NumberOfReps: "totalRepublicans",
                pctVotedParty: "averageRepublicans"
            },
            {
                party: "Independents",
                NumberOfReps: "totalRepublicans",
                pctVotedParty: "averageIndependents"
            },
            {
                party: "Total",
                NumberOfReps: "totalMembers",
                pctVotedParty: "averageSenators"
            }
    ]
    },



    methods: {
        //------------------------------Fetch data -------------------------------------------------------------->
        getData() {

            fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
                    headers: {
                        "X-API-KEY": this.key
                    }
                })

                .then(function (resp) {
                    return resp.json()
                })
            .then(function (allMembers){
                console.log(allMembers.results[0].members)
                myVueObject.members = allMembers.results[0].members
                
                
                
                
                
                
                
            })
            
        }

        /*getData() {


            if (window.location.href.includes("senate")) {
                site = 'https://api.propublica.org/congress/v1/113/senate/members.json';
            } else if (window.location.href.includes("house")) {
                site = 'https://api.propublica.org/congress/v1/113/house/members.json';
            }
            var that = this;
            fetch(site, {

                    headers: {
                        'X-API-Key': 'FWHJZ1xefU7G9fkBIhnV9o021FA3btC0nLKaMjIT',
                    }
                }).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Unable to retrieve data');
                    }
                })
                .then(function (jsonData) {
                    app.members = jsonData.results[0].members;

                    //push data into local  storage
                    var myJSON = JSON.stringify(app.members);
                    sessionStorage.setItem('membersJSON', myJSON);
                    app.sessionStorage_data = JSON.parse(sessionStorage.getItem('membersJSON'));
                    //calling functions + hide loader
                    app.loading = false;
                    app.members_counter();
                });
        },
*/
    }

});
