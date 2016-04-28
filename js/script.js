
// Open
$( ".mobile" ).click(function() {
   $( ".sidebar" ).addClass( "mobile-push");
});
$(".mobile").hover(function(){
   $(".mobile").addClass("hover-color");
}, function(){
   $(".mobile").removeClass("hover-color");
});


// Close
$( ".mobile-close" ).click(function() {
   $( ".sidebar" ).removeClass( "mobile-push");
});
 $(".mobile-close").hover(function(){
    $(".mobile-close").addClass("hover-color");
 }, function(){
    $(".mobile-close").removeClass("hover-color");
 });
