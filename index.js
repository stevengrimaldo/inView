const sections = document.querySelectorAll('section');
const elCushion = 0.5;
const offsetTop = 0;
const offsetBottom = 0;

const inView = el => {
  // Set container positions
  const cTop = window.pageYOffset;
  const cBottom = window.innerHeight - offsetBottom;

  // Get elements height + set visible offset
  const elHeight = el.getBoundingClientRect().height;
  const elOffset = elHeight * elCushion;

  // Set the elements top and bottom points
  const elTop = el.getBoundingClientRect().top;
  const elBottom = elTop + elHeight;

  // Get elements positions minus offsets
  const eTop = elTop + elOffset;
  const eBottom = elTop + elHeight - offsetTop;

  // return true or false
  return eTop <= cBottom && eBottom >= elOffset;
};

const checkVisibility = () => {
  for (const section of sections) {
    if (inView(section)) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  }
};

window.addEventListener('load', checkVisibility, false);
window.addEventListener('scroll', checkVisibility, false);
