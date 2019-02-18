var myVueObject = new Vue({
    el: "#app",
    data: {

        key: "FWHJZ1xefU7G9fkBIhnV9o021FA3btC0nLKaMjIT",
        url: "https://api.propublica.org/congress/v1/116/",
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

    created: function () {
        this.getData();
    },

    methods: {
        getData: function () {

            this.loading = true;

            fetch(this.url, {
                    headers: {
                        "X-API-KEY": this.key
                    }
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.members = data.results[0].members;
                    this.loading = false;
                })
                .catch(error => console.log("Error: " + error));
        }
    },
    /*computed: {
        noRepeatedStates() {
            return new Set(this.members.map(m => m.state).sort());
        },
        filteredMembers() {
            return this.members.filter(member => {
                let filter1 = this.checkBoxes.includes(member.party) || this.checkBoxes.length === 0;
                let filter2 = member.state === this.stateSelected || this.stateSelected === "all";
                return filter1 && filter2;
            })
        },
        finalUrl() {
            return "https://api.propublica.org/congress/v1/116/" + this.chamber + "/members.json"
        }
    }*/

});
