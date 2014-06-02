//get querystrings
function GetQueryStringParams(sParam, url) {
    var sPageURL = url;
    var sURLVariables = sPageURL.split('?');
    var urlVarList = sURLVariables[1].split('&');
    for (var i = 0; i < urlVarList.length; i++) {
        var sParameterName = urlVarList[i].split('=');
        if (sParameterName[i] == sParam) {
            return urlVarList[i].split('=')[1];
        }
    }
}
$(function () {
    var dpart = [];
    var dpartList = "";
    var cat = [];
    var eff = [];
    var imp = [];
    var date;
    var ideasearch;
    var sortorder = "";
    $("a.lnkOrder").click(function (e) {
        ideasearch = $("#ideaSearch").val();
        var departments = $("input[id^='departments']");
        for (var i = 0; i < departments.length; i++) {
            if (departments[i].checked) {
                // dpart.push(departments[i].value);
                dpartList = dpartList + departments[i].value + ",";
            }
            else {
                //iddept = departments[i].value;
                //position = $.inArray(iddept, dpart);
                //if (~position) dpart.splice(position, 1);
            }
        }
        $("input[id^='departments']").each(function () {
            if ($(this).is(':checked')) {
                dpart.push($(this).val());
            }
            else {
                iddept = $(this).val();
                position = $.inArray(iddept, dpart);
                if (~position) dpart.splice(position, 1);
            }
        });
        $("input[id^='categories']").each(function () {
            if ($(this).is(':checked')) {
                cat.push($(this).val());
            }
            else {
                iddept = $(this).val();
                position = $.inArray(iddept, cat);
                if (~position) cat.splice(position, 1);
            }
        });
        var sorder = GetQueryStringParams('sortOrder', $(this)[0].href);
        if (sorder.indexOf("_desc") < 0) {
            // sorder = "id_desc";
            //move to a method
            var old_fulladdr = $(this).attr('href');
            // split it to get the actual file address
            var old_addr_parts = old_fulladdr.split('?');
            // This may need something more complex...
            var new_querystring = 'sortOrder=Id_desc&ideaSearch=' + ideasearch;
            // This changes the href of the link to the new one.
            $(this).attr('href', old_addr_parts[0] + '?' + new_querystring);
            $(this).parent().children()[1].innerText = '▲';
        }
        else {
            //there is an errorrr
            // $(this)[0].href = $(this)[0].href.replace("=id_desc", "=id")
            var old_fulladdr = $(this).attr('href');
            // split it to get the actual file address
            var old_addr_parts = old_fulladdr.split('?');
            // This may need something more complex...
            var new_querystring = 'sortOrder=id&ideaSearch=' + ideasearch;
            // This changes the href of the link to the new one.
            $(this).attr('href', old_addr_parts[0] + '?' + new_querystring);
            $(this).parent().children()[1].innerText = '▼';
        }
        var d = JSON.stringify({ departmentsList: dpartList, categories: cat, effortLevels: eff, impactLevels: imp, updateddate: date, ideasearch: ideasearch, sortOrder: sorder });
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/Idea/Published/Index",
            contentType: "application/json",
            data: d,
            success: function (dataout) {
                $("#publishIdeasTable").html(dataout);
            },
            error: function (xhr) {
                alert("error");
            },
            beforeSend: function () {
                $("#LoadingImage").show();
            },
            complete: function () {
                $("#LoadingImage").hide();
            }
        });

    });
    $(".moreElement a").click(function () {
        if ($(this).text() == 'Show Less') {
            $(".divNonShowCheck").each(function () {
                $(this).hide();
            });
            row = 0;
            $("#moreLink").text("Show All");
        } else {

            $(".divNonShowCheck").each(function () {
                $(this).show();

            });
            $("#moreLink").text("Show Less");
        }
        return false;
    });

    $(".moreElementCategory a").click(function () {
        if ($(this).text() == 'Show Less') {
            $(".divNonShowCheckCat").each(function () {
                $(this).hide();
            });
            categoryRow = 0;
            $("#moreLinkCategory").text("Show All");
        } else {

            $(".divNonShowCheckCat").each(function () {
                $(this).show();

            });
            $("#moreLinkCategory").text("Show Less");
        }
        return false;
    });

    //filter checkbox on the left.
    $("input:checkbox, input:radio").click(function () {
        ideasearch = $("#ideaSearch").val();
        if ($(this).attr("name") == "departments") {
            if ($(this).is(':checked')) {
                dpart.push($(this).val());
            }
            else {
                iddept = $(this).val();
                position = $.inArray(iddept, dpart);
                if (~position) dpart.splice(position, 1);
            }
        }
        if ($(this).attr("name") == "categories") {
            if ($(this).is(':checked')) {
                cat.push($(this).val());
            }
            else {
                iddept = $(this).val();
                position = $.inArray(iddept, cat);
                if (~position) cat.splice(position, 1);
            }
        }
        if ($(this).attr("name") == "effortLevels") {
            if ($(this).is(':checked')) {
                eff.push($(this).val());
            }
            else {
                iddept = $(this).val();
                position = $.inArray(iddept, eff);
                if (~position) eff.splice(position, 1);
            }
        }
        if ($(this).attr("name") == "impactLevels") {
            if ($(this).is(':checked')) {
                imp.push($(this).val());
            }
            else {
                iddept = $(this).val();
                position = $.inArray(iddept, imp);
                if (~position) imp.splice(position, 1);
            }
        }

        //updateddate

        if ($(this).attr("id") == "updateddate") {
            date = $(this).val();
        }
        var d = JSON.stringify({ departments: dpart, categories: cat, effortLevels: eff, impactLevels: imp, updateddate: date, ideasearch: ideasearch });

        $.ajax({
            type: "POST",
            url: "/Idea/Published/Index",
            contentType: "application/json",
            data: d,
            success: function (dataout) {
                $("#publishIdeasTable").html(dataout);
            },
            error: function (xhr) {
                alert("error");
            },
            beforeSend: function () {
                $("#LoadingImage").show();
            },
            complete: function () {
                $("#LoadingImage").hide();
            }
        });
    });

});


