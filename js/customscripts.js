$('#mysidebar').height($(".nav").height());


$( document ).ready(function() {

    //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
    // position as your scroll. if you have a lot of nav items, this height may not work for you.
    var h = $(window).height();
    //console.log (h);
    if (h > 800) {
        $( "#mysidebar" ).attr("class", "nav");
    }
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    /**
     * AnchorJS
     */
    anchors.add('h2,h3,h4,h5');

});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});
$(document).ready(function() {
    // Initialize navgoco with default options
    $("#mysidebar").navgoco({
        caretHtml: '',
        accordion: true,
        openClass: 'active', // open
        save: false, // leave false or nav highlighting doesn't work right
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 400,
            easing: 'swing'
        }
    });

    $("#collapseAll").click(function(e) {
        e.preventDefault();
        $("#mysidebar").navgoco('toggle', false);
    });

    $("#expandAll").click(function(e) {
        e.preventDefault();
        $("#mysidebar").navgoco('toggle', true);
    });

});
function copyHover(codeId, copyId){
    $('#'+codeId).mouseenter(function() {
        $('#'+copyId).show();
    }).mouseleave(function() {
        $('#'+copyId).hide();
    });

    $('#'+copyId).mouseenter(function() {
        $('#'+copyId).show();
    }).mouseleave(function() {
        $('#'+copyId).hide();
    });

    $('#'+copyId).click(function(){
        lines =document.getElementById(codeId).textContent.split('\n');
        result= lines.slice(3, lines.length-1).join("\n");
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(result).select();
        console.log($temp.val(result))
        document.execCommand("copy");
        $temp.remove();
        $('#'+copyId).attr('data-original-title', 'Copied').tooltip('show');   
        setTimeout(() => {
            $('#'+copyId).attr('data-original-title', 'Copy to ClipBoard').tooltip('show'); 
        }, 10000);
    });
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function() {
    if ($(window).width() <= 972) {
        if (localStorage.getItem('last_visited') != null &&
            localStorage.getItem('navbar') == "show"){
            localStorage.setItem('navbar','hide')
            $("#tg-sb-sidebar").toggle();
            $("#tg-sb-content").toggleClass('col-md-9');
            $("#tg-sb-content").toggleClass('col-md-12');
            $("#tg-sb-icon-mobile").toggleClass('fa-toggle-on');
            $("#tg-sb-icon-mobile").toggleClass('fa-toggle-off');
        }
        else if(localStorage.getItem('navbar') == "hide"){
            $("#tg-sb-sidebar").toggle();
            $("#tg-sb-content").toggleClass('col-md-9');
            $("#tg-sb-content").toggleClass('col-md-12');
            $("#tg-sb-icon-mobile").toggleClass('fa-toggle-on');
            $("#tg-sb-icon-mobile").toggleClass('fa-toggle-off');
        }
    }
    else{
        if (localStorage.getItem('navbar') == "hide" ){
        $("#tg-sb-sidebar").toggle();
        $("#tg-sb-content").toggleClass('col-md-9');
        $("#tg-sb-content").toggleClass('col-md-12');
        $("#tg-sb-icon").toggleClass('fa-toggle-on');
        $("#tg-sb-icon").toggleClass('fa-toggle-off');
        }
        else if(localStorage.navbar == "show" ){
        }
        else{
            localStorage.setItem('navbar','show')
        }

    }        
    $("#tg-sb-link").click(function() {
        $("#tg-sb-sidebar").toggle();
        $("#tg-sb-content").toggleClass('col-md-9');
        $("#tg-sb-content").toggleClass('col-md-12');
        $("#tg-sb-icon").toggleClass('fa-toggle-on');
        $("#tg-sb-icon").toggleClass('fa-toggle-off');
        if(localStorage.getItem('navbar') == "show"){
            localStorage.setItem('navbar','hide')
        }
        else{
            localStorage.setItem('navbar','show')
        }
    });
    $("#tg-sb-link-mobile").click(function() {
        $("#tg-sb-sidebar").toggle();
        $("#tg-sb-content").toggleClass('col-md-9');
        $("#tg-sb-content").toggleClass('col-md-12');
        $("#tg-sb-icon-mobile").toggleClass('fa-toggle-on');
        $("#tg-sb-icon-mobile").toggleClass('fa-toggle-off');
        if(localStorage.getItem('navbar') == "hide"){
            localStorage.setItem('navbar','show');
        }
        else{
            localStorage.setItem('navbar','hide')
        }
        if (localStorage.getItem('last_visited') == null ){
            localStorage.setItem('last_visited', new Date())
        }

    });
});
$(document).ready(function() {
    $('#searchModel').on('shown.bs.modal', function () {
        $('#search-input').focus();
    });  

    function search_shortcut(e) {
        if ( e.keyCode == 113) {
            document.getElementById('search-tool').click()
        }
    }
    // register the handler 
    document.addEventListener('keyup', search_shortcut, false);  
});
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("#back-to-top").fadeIn(); 
        }else{
            $("#back-to-top").fadeOut();
        }
    });
    $("#back-to-top").click(function(){
        document.activeElement.blur();
        $('body,html').animate({scrollTop: 0}, 400);
        return false;    
    });
});
