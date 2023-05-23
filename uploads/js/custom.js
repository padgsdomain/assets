/*Extra JS*/

        $('.slide_texts').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 5000,
        });


$('#result_result_gv tbody').addClass("row");

$('#result_result_gv tr').addClass("col-12 col-lg-2 col-md-3 grid-item margin-30px-bottom sm-margin-20px-bottom wow fadeInUp text-center text-md-left p-2");
function replaceElem(targetId, replaceWith) {
    $(targetId).each(function () {
        var attributes = concatHashToString(this.attributes);
        var replacingStartTag = '<' + replaceWith + attributes + '>';
        var replacingEndTag = '</' + replaceWith + '>';
        $(this).replaceWith(replacingStartTag + $(this).html() + replacingEndTag);
    });
}
function concatHashToString(hash) {
    var emptyStr = '';
    $.each(hash, function (index) {
        emptyStr += ' ' + hash[index].name + '="' + hash[index].value + '"';
    });
    return emptyStr;
}
replaceElem('#result_result_gv tr', 'div');
replaceElem('#result_result_gv tbody', 'div');
replaceElem('#result_result_gv table', 'div');





$('#result_result_gv_home tbody').addClass("row");

$('#result_result_gv_home tr').addClass("col-12 col-lg-2 col-md-3 grid-item margin-30px-bottom sm-margin-20px-bottom wow fadeInUp text-center text-md-left p-2");
function replaceElem(targetId, replaceWith) {
    $(targetId).each(function () {
        var attributes = concatHashToString(this.attributes);
        var replacingStartTag = '<' + replaceWith + attributes + '>';
        var replacingEndTag = '</' + replaceWith + '>';
        $(this).replaceWith(replacingStartTag + $(this).html() + replacingEndTag);
    });
}
function concatHashToString(hash) {
    var emptyStr = '';
    $.each(hash, function (index) {
        emptyStr += ' ' + hash[index].name + '="' + hash[index].value + '"';
    });
    return emptyStr;
}
replaceElem('#result_result_gv_home tr', 'div');
replaceElem('#result_result_gv_home tbody', 'div');
replaceElem('#result_result_gv_home table', 'div');


/*Others JS*/

     function isNumberKey(evt) {
         var charCode = (evt.which) ? evt.which : evt.keyCode;
         if (charCode > 31 && (charCode < 48 || charCode > 57))
             return false;
         return true;
     }



