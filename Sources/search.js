function resetSearchInput() {
    document.getElementById('searchMenu').value = '';
    var value = $("#searchMenu").val().toLowerCase();
    $("tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    $("div.accordion-item").each(function(i) {
        $(this).show();
    });
}


function chefSpecial() {
    var value = 'chef';
        $("tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });


        $("div.accordion-item").each(function(i) {
            if ($(this).height() <= 130) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
}

$(document).ready(function() {

    $("#searchMenu").on("keyup focus clear", function() {
        var value = $(this).val().toLowerCase();
        $("tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });


        $("div.accordion-item").each(function(i) {
            if ($(this).height() <= 130) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });

    });
});