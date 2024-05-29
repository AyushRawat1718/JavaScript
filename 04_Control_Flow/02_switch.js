//Switch case

//Recall Basis -> The break statement is required after each case block b/c if for a sudden case "key" is matched then from their onwards all the cases will execute except the default block 

//Note -> Here key value can be other data type also like(string) 
const week_index = 3;

switch (week_index) {
    case 1: console.log("It's Monday");
        break;
    case 2 : console.log("It's Tuesday");
        break;
    case 3: console.log("It's Wednesday");
        break;
    case 4: console.log("It's Thursday");
        break; 
    case 5: console.log("It's Friday");
        break; 
    case 6: console.log("It's Saturday");
        break;
    case 7: console.log("It's Sunday");
        break;        
    default: console.log("Invalid week_index")
        break;
}