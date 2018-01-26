

var quotes = [
    "I love you the more in that I believe you had liked me for my own sake and for nothing else./John Keats",
    "But man is not made for defeat. A man can be destroyed but not defeated./Ernest Hemingway",
    "When you reach the end of your rope, tie a knot in it and hang on./Franklin D. Roosevelt",
    "There is nothing permanent except change./Heraclitus",
    "You cannot shake hands with a clenched fist./Indira Gandhi",
    "Let us sacrifice our today so that our children can have a better tomorrow./A. P. J. Abdul Kalam"
];


var quoteArr = [];
for(var i=0; i<quotes.length; i++){
    quoteArr.push(quotes[i].split("/"));
}
console.log(quoteArr);
console.log(quoteArr[5][0]); 



$(document).ready(function(){
    
});

/*$("button").click(function(){
    $("#box").html("<em>" + quoteArr[rand][0] + "</em>"); // quoteArr[rand][0]-> quote ;
    $("#author").html("<em>" + quoteArr[rand][1] + "</em>"); //quoteArr[rand][1] ->author ;
});*/

function changeQuote(){
    var rand = Math.floor(Math.random() *  quotes.length);
    console.log(rand);
    console.log(quoteArr[rand][0]); //quote
    console.log(quoteArr[rand][1]); //author

    document.getElementById('box').innerHTML = quoteArr[rand][0];
    document.getElementById('author').innerHTML = quoteArr[rand][1];
}

    
//https://www.pexels.com/photo/road-landscape-nature-forest-39811/

