document.addEventListener("DOMContentLoaded", function() {

  let colors = [
  'var(--green)',
  'var(--red)',
  'var(--yellow)',
  'var(--blue)',
  'var(--pink)'
  ]

  let prices = [...(document.querySelectorAll('.price'))];

  for (var price of prices) {
    var newColor = colors[Math.floor(Math.random() * colors.length)]
    price.style.color = newColor;
    price.parentElement.previousElementSibling.style.borderBottomColor = newColor;
  }

});