$(document).ready(function() {
    // lightTheme()
    // darkTheme()
    setLayouts('sm');

    $.each($(".tabs"), function(tabIndex, tab) {

        var bodys = $(tab).find(".tab-body")
        $(bodys).hide();
        $(bodys[0]).show();
        $.each($(tab).find(".tab-head button"), function(buttonIndex, buttons) {
            $(this).click(function(e) {
                $(bodys).hide();
                $(bodys[buttonIndex]).show();

            });

        });

    });
});


showProperties();