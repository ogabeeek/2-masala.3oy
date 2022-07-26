let users = [
    {
        name: "Avazbek",
        telNumber: "998911645099"
    },
    {
        name: "Umid",
        telNumber: "998911758585"
    },
    {
        name: "O'ktam",
        telNumber: "998911777767"
    },
    {
        name: "Valijon",
        telNumber: "998917777777"
    },
    {
        name: "Sarvar",
        telNumber: "998911222222"
    },
    {
        name: "Sardor",
        telNumber: "998911222322"
    },
    {
        name: "Toxir",
        telNumber: "998911645022"
    }
]


// let number= 998917777777

function selectPhoneNumber(number){
    for(i=0; i<users.length; i++){

        if(number!==users[i].telNumber){
            console.log(" ");
         };


        if(number==users[i].telNumber){
            (console.log(users[i].name));
            break
            
         };

         
    }

    
}

selectPhoneNumber((998911645022))