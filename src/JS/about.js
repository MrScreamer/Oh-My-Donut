const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.getElementById('more');
const expandableText = document.querySelector('.expandable-text');
const originalHeight = expandableText.clientHeight;

readMoreBtn.addEventListener('click', function() {
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
    readMoreBtn.innerText = 'Read less';
    expandableText.classList.add('expanded');
  } else {
    moreText.style.display = 'none';
    readMoreBtn.innerText = 'Read more';
    expandableText.classList.remove('expanded');
  }
});
