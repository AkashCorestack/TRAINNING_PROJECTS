let day ;
switch(new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    default:
        day = "Other Day ";

}
document.write("Today is "+ day);

