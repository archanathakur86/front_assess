var imgs     = document.querySelectorAll('.slide-img');
var contents = document.querySelectorAll('.slide-content');
var dots     = document.querySelectorAll('.dot');
var cur      = 0;

function goTo(n) {
  imgs[cur].classList.remove('active');
  contents[cur].classList.remove('active');
  dots[cur].classList.remove('active');

  cur = (n + imgs.length) % imgs.length;

  imgs[cur].classList.add('active');
  contents[cur].classList.add('active');
  dots[cur].classList.add('active');
}

// Arrow buttons
document.querySelector('.prev').addEventListener('click', function() {
  goTo(cur - 1);
});
document.querySelector('.next').addEventListener('click', function() {
  goTo(cur + 1);
});

// Dot buttons
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    goTo(parseInt(this.dataset.index));
  });
}

// Autoplay
setInterval(function() {
  goTo(cur + 1);
}, 3500);