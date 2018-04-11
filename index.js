var sections = document.querySelectorAll('section');
var elCushion = 0.5;
var offsetTop = 0;
var offsetBottom = 0;

var inView = function(el) {
  // Set container positions
  var cTop = window.pageYOffset;
  var cBottom = window.innerHeight - offsetBottom;

  // Get elements height + set visible offset
  var elHeight = el.getBoundingClientRect().height;
  var elOffset = elHeight * elCushion;

  // Set the elements top and bottom points
  var elTop = el.getBoundingClientRect().top;
  var elBottom = elTop + elHeight;

  // Get elements positions minus offsets
  var eTop = elTop + elOffset;
  var eBottom = elTop + elHeight - offsetTop;

  // return true or false
  return (eTop <= cBottom && eBottom >= elOffset);
};

var checkVisibility = function() {
  for (var section of sections) {
    if (inView(section)) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  }
};

window.addEventListener('load', checkVisibility, false);
window.addEventListener('scroll', checkVisibility, false);
