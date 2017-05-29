/*
var quotes =
    [
        {
            "text": "Quote 1",
            "author": "David Fuentes",
            "source": "New York Times"
        },
        {
            "text": "Quote 2",
            "author": "Mariela Villalba",
            "source": "Detroit Times"
        }
    ]
*/

$(document).ready(function () {
    var i = 0;
    $("#btn").on("click", function () {
         $.getJSON("quote.json", function (json) {
           $("#text").html(JSON.stringify(json));
         });
        /*
        $("#text").text(quotes[i].text);
        $("#author").text(quotes[i].author);
        $("cite").text(quotes[i].source);
        i++;

        if (i === 2){
            $("#btn").hide();
        }
        */
    });

});
