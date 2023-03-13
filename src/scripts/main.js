document.addEventListener('DOMContentLoaded', () => {
  const header_container = document.querySelector('.header');
  const sectionRight = document.querySelectorAll('.header__rightsection--title');
  body.init(header_container, sectionRight);
});


const body = (() => {
  var link = window.location.pathname;

  function init(header_container, sectionRight) {
    // let hc = header_container;
    // console.log(hc);
    // console.log(hc.children);
    // console.log(hc.children[1].children[0]);
    // console.log('hello, mam, how are you');
    // console.log(sectionRight);

    checkLink(sectionRight);

  }

  /*************************
   *
   * checkLink: Use to color the nav menu title.
   * @param sr: sectionRight
   * @return nothing
   *
   ************************/
  function checkLink(sr) {
    if(link === '/' || link === '/index.html' || link === '/ungo.github.io/') {
      sr[0].style.color = 'red';
    }
    else if(link === '/matsedill_ungo.html' || link === '/ungo.github.io/matsedill_ungo.html') {
      sr[1].style.color = 'red';
    }
    else if(link === '/tilbod_ungo.html' || link === '/ungo.github.io/tilbod_ungo.html') {
      sr[2].style.color = 'red';
    }
    else if(link === '/um_ungo.html' || link === '/ungo.github.io/um_ungo.html') {
      sr[3].style.color = 'red';
    }
    else if(link === '/english_menu_ungo.html' || link === '/ungo.github.io/english_menu_ungo.html') {
      sr[4].style.color = 'red';
    }
  }


  return {
    init: init
  };
})();
