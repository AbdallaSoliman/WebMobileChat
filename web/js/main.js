$(document).ready(function () {
    $("#SubmitButton").click(function () {
        var name = $("#name").val();
        var password = $("#password").val();
        var jsonData = {"name": name, "pass": password};
        $.ajax({url: 'JSONServlet', //servlet url
            type: 'GET', //servlet request type
            contentType: 'application/json', //For input type
            data: jsonData, //input data
            dataType: 'text', //For output type
            success: function (data) {
                if (data.equals("sucess"))
                    $("#Msg").text("");
            }
        });
    });
});

        