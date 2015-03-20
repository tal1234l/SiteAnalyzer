
function sendUrl() {

    $('.loading').css('visibility','visible');

    $.ajax({
        type: "POST",
        url: window.location.origin+"/analyze",
        data: {url: $('#FormInput').val()},
        success: function(data){
            if($(".analyzeResult li").length>0)
            {
                $(".analyzeResult li").remove();
            }
            var div = $('<li class="result">'+
                        '<div class="block siteData">'+
                            '<strong>Title: </strong><br>'+data.body.title+' <br>'+
                            '<strong>Description: </strong><br>'+data.body.description+'<br>'+
                            '<strong>Favicon: </strong><br>'+data.favicon+''+
                        '</div>'+
                        '</li>');
            $(".analyzeResult").append(div);

            $('.loading').css('visibility','hidden');
        },
        error: function(data){
            console.log("error");
        }
    });


}