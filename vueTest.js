var myVueObject = new Vue({
    el: "#app",
    data: {

        names: [
            {
                party: "Democrats",
                NumberOfReps: "displayValues("D")",
                pctVotedParty: "YY"
            },
            {
                party: "Republicans",
                NumberOfReps: "19",
                pctVotedParty: "XY"
            },
            {
                party: "Independents",
                NumberOfReps: "100",
                pctVotedParty: "YX"
            },
            {
                party: "Total",
                NumberOfReps: "totalMembers",
                pctVotedParty: "XX"
            }
    ]
    },
    methods: {

    }

});
