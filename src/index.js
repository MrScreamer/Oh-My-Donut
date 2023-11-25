document.addEventListener('DOMContentLoaded', () => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');
  const bodyLock = document.querySelector('body');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    bodyLock.classList.toggle('is-lock');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
    bodyLock.classList.remove('is-lock');
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains("mobile-menu-link")) {
      mobileMenuRef.classList.remove('is-open');
      bodyLock.classList.remove('is-lock');
    }
  });
});
