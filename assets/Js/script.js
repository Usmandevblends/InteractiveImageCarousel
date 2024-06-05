$(document).ready(function() {
    $("#image-carousel").owlCarousel({
        items: 3,
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



// $('.btn').on('click', function(){
//     $('#image-container').html('<img src="' +  + '" alt="Selected Image">');
// });


// document.querySelectorAll('.btn').forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         document.getElementById('image-container').innerHTML = '<img src="' +  + '" alt="Selected Image">';
//     });
// });


const Btn = document.getElementsByClassName('btn');
const ImageContainer = document.getElementById('image-container')
Btn[0].addEventListener('click', () => {
    ImageContainer.innerHTML = '<img src="' +  + '" alt="Selected Image">'
})