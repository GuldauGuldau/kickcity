const coverElem = document.getElementById("cover");
const articleElem = document.getElementById("article");
const asideWrap = document.getElementsByClassName('aside-wrap')[0];
const backdrop = document.getElementById("backdrop");
const popup = document.getElementById("popup");
let coverSource;
let articleSource;

Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});

getSource = () => {
   coverSource = coverElem.getBoundingClientRect().bottom + window.pageYOffset;
   articleSource = articleElem.getBoundingClientRect().top + window.pageYOffset;
}
window.onload = getSource();
window.addEventListener("resize", getSource, false);

window.onscroll = () => {
  if ( (window.pageYOffset+30) > coverSource) {
    asideWrap.classList.add('show', 'animated', 'fadeIn');
  }

  if( (window.pageYOffset) > articleSource) {
    asideWrap.classList.add('fixed');
  } else {
    asideWrap.classList.remove('fixed');
  }
  console.log('coverSource: ' + coverSource);
  console.log('articleSource: ' + articleSource);
  console.log('pageYOffset: ' + window.pageYOffset);
};

showPopup = () => {
  backdrop.classList.add('show', 'animated', 'fadeIn');
  popup.classList.add('show', 'animated', 'fadeInUp');
}

hidePopup = () => {
  backdrop.classList.add('fadeOut');
  popup.classList.add('fadeOutUp');
  backdrop.addEventListener("animationend", () => {
    if(backdrop.classList.contains('fadeOut')) {
      backdrop.classList.remove('show', 'animated', 'fadeIn', 'fadeOut');
    }

    if(popup.classList.contains('fadeOutUp')) {
      popup.classList.remove('show', 'animated', 'fadeInUp', 'fadeOutUp');
    }
  }, false);
}
