const mobilemenu = document.querySelector('.mobile-menu');
document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobilemenu.classList.toggle('is-open');
  }); 