const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}


if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}



$(document).ready(function() {
    $('.pro').click(function() {
        $(this).find('.popup-container').fadeIn();
    });

    $('.popup-container').click(function(e) {
        if ($(e.target).hasClass('popup-container')) {
            $(this).fadeOut();
        }
    });
});


// Get all book elements
var books = document.getElementsByClassName("pro-container");

// Loop through each book
for (var i = 0; i < books.length; i++) {
  var book = books[i];

  // Add a click event listener to each book
  book.addEventListener("click", function () {
    var popup = this.querySelector("des");
    popup.style.display = "flex";
  });
}

// Close the pop-up when clicked outside the content
document.addEventListener("click", function (event) {
  var popup = document.querySelector("des");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
