$('#mysidebar').height($(".nav").height());
$( document ).ready(function() {
    var h = $(window).height();
    if (h > 800) {
        $( "#mysidebar" ).attr("class", "nav");
    }
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
    anchors.add('h2,h3,h4,h5');
});
$(document).ready(function() {
    $("#mysidebar").navgoco({
        caretHtml: '',
        accordion: true,
        openClass: 'active',
        save: false, 
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

    $('#toc').toc({ minimumHeaders: 0, listType: 'ul', showSpeed: 0, headers: 'h2,h3,h4' });
    $('#toc').on('click', 'a', function() {
        var target = $(this.getAttribute('href'))
            , scroll_target = target.offset().top

        $(window).scrollTop(scroll_target - 10);
        return false
    })

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
        if (typeof myVar !== 'undefined'){
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
        }
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});
