const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });
});

const hiddenElement = document.querySelectorAll('.hidden, .hidden-header, .hidden-sub-header');
hiddenElement.forEach((el) => observer.observe(el));
