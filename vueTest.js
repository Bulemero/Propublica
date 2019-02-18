var myVueObject = new Vue({
    el: "#app",
    data: {

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

    }

});
