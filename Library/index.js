


var book1 = {
    namee: "B",
    Author : "Akash.V",
    Content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nobis, pariatur iure totam ducimus non aliquid quam reiciendis maxime! Ullam dolore ipsum maiores accusantium blanditiis rem voluptatum culpa ducimus porro.",
    Moral: "Nothing"
}


function fun(val){
    switch (val) {
        case 1:
            document.write("<h1> Book name B"+val +"</h1>");
            document.write("<h2> Author "+ book1.Author+ "</h2>");
            document.write("<h3> Content: </h3>");
            document.write("<h3> "+book1.Content+"</h3>");
            document.write("<h1> Moral of story is "+book1.Moral+"</h1>")
            
            break;
            case 2:
                document.write("<h1> Book name B"+val +"</h1>");
                document.write("<h2> Author "+ book1.Author+ "</h2>");
                document.write("<h3> Content: </h3>");
                document.write("<h3> "+book1.Content+"</h3>");
                document.write("<h1> Moral of story is "+book1.Moral+"</h1>")
                break;

    
        default:
                 document.write("<h1> Book name B"+val +"</h1>");
                document.write("<h2> Author "+ book1.Author+ "</h2>");
                document.write("<h3> Content: </h3>");
                document.write("<h3> "+book1.Content+"</h3>");
                document.write("<h1> Moral of story is "+book1.Moral+"</h1>")

            break;
    }
    
}