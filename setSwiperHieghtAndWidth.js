function fp_sizeWrapper(bodySelector, headerSelector, footerSelector) {



    //document.addEventListener("backbutton", onBackKeyDown, false);

    //var script = document.createElement('script');
    //script.src = 'cordova-2.4.0.js';
    //script.type = 'text/javascript';
    //document.getElementsByTagName('head')[0].appendChild(script);
    //alert(screenWidth+"=="+screenHight);

    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $("#orient").width(winWidth);
    $("#orient").height(winHeight);

    var overhead = 0;
    if (bodySelector != undefined && bodySelector != "") {
        var innerWrap = $("#content1");
        if (innerWrap.length > 0) {
            overhead += parseInt(innerWrap.css("marginTop")) + parseInt(innerWrap.css("marginBottom")) + parseInt(innerWrap.css("paddingTop")) + parseInt(innerWrap.css("paddingBottom"));
        }
        if (headerSelector != undefined && headerSelector != "") {
            $(headerSelector).each(function () {
                overhead += $(this).height() + parseInt($(this).css("marginTop")) + parseInt($(this).css("marginBottom")) + parseInt($(this).css("paddingTop")) + parseInt($(this).css("paddingBottom"));
            });
        }
        if (footerSelector != undefined && footerSelector != "") {
            var bottomNav = $(footerSelector);
            if (bottomNav.length > 0) {
                overhead += bottomNav.height() + parseInt(bottomNav.css("marginTop")) + parseInt(bottomNav.css("marginBottom")) + parseInt(bottomNav.css("paddingTop")) + parseInt(bottomNav.css("paddingBottom"));
            }
        }
        var content = $(bodySelector);
        if (content.length > 0) {
            overhead += parseInt(content.css("marginTop")) + parseInt(content.css("marginBottom")) + parseInt(content.css("paddingTop")) + parseInt(content.css("paddingBottom"));
            content.height(Math.max(0, winHeight - overhead));
            //$("#scrollwrapper").height(content.height() - 20);
        }
    }
}
