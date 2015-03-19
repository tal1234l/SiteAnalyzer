
function sendUrl() {

    $.ajax({
        type: "POST",
        url: window.location.origin+"/analyze",
        data: {url: $('#FormInput').val()},
        success: function(data){
            debugger;
        }
    });


}