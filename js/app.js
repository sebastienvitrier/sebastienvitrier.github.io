//afficher/masquer le dropdown

const menuDropDownBtns = document.suerySelectorAll('.menu-dropdown-btn');
for (menuDropDownBtns of menuDropDownBtns) {
  menuDropDownBtns.addEventListener('click', function(){
  this.parentElement.QuerySelector('.menu-dropdown-menu').classlist.toggle('visible');
  });
}

// supprimer le .visible quand on clique sur autre chose
window.addEventListener('click', function(e) {
  if (!e.target.matches('.menu-dropdown-btn')){
  document.QuerySelector('.menu-dropdown-menu').classlist.remove('visible');
  }
});
