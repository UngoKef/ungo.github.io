document.addEventListener('DOMContentLoaded', () => {
  const header_container = document.querySelector('.header');
  const sectionRight = document.querySelectorAll('.header__rightsection--title');
  body.init(header_container, sectionRight);
});


const body = (() => {
  var link = window.location.pathname;

  function init(header_container, sectionRight) {
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
    if(link === '/' || link === '/index.html' || link === '/ungo.github.io/' || link === '/ungo.is/') {
      sr[0].style.color = '#ff726f';
    }
    else if(link === '/matsedill_ungo.html' || link === '/ungo.github.io/matsedill_ungo.html' || link === '/ungo.is/matsedill_ungo.html') {
      sr[1].style.color = '#ff726f';
    }
    else if(link === '/is_ungo.html' || link === '/ungo.github.io/is_ungo.html' || link === '/ungo.is/is_ungo.html') {
      sr[2].style.color = '#ff726f';
    }
    else if(link === '/tilbod_ungo.html' || link === '/ungo.github.io/tilbod_ungo.html' || link === '/ungo.is/tilbod_ungo.html') {
      sr[3].style.color = '#ff726f';
    }
    else if(link === '/um_ungo.html' || link === '/ungo.github.io/um_ungo.html' || link === '/ungo.is/um_ungo.html') {
      sr[4].style.color = '#ff726f';
    }
    else if(link === '/english_menu_ungo.html' || link === '/ungo.github.io/english_menu_ungo.html' || link === '/ungo.is/english_menu_ungo.html') {
      sr[5].style.color = '#ff726f';
    }
  }


  return {
    init: init
  };
})();
