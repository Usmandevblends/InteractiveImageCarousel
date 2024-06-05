$(document).ready(function() {
    $("#image-carousel").owlCarousel({
        items: 4,
        navigation: true,
        pagination: true,
        autoplay: true,
        loop: true,
        center: true,
        margin: 5 
    });
});

$('#image-carousel .item img').on('click', function(){
    
    var path = $(this).attr("src");
    $('#image-container').html('<img src="' + path + '" alt="Selected Image">');
});