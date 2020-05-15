// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //Get the button
  const mybutton = document.getElementById("myBtn");
  if (mybutton === undefined || mybutton === null) {
    console.error("Scroll to top button is undefined or null.  Please fix.");
    return;
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
export default function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
