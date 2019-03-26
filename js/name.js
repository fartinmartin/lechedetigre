document.addEventListener("DOMContentLoaded", function() {

  let colors = [
  'var(--red)',
  'var(--yellow)',
  'var(--blue)',
  'var(--pink)',
  'var(--yellow)',
  'var(--green)',
  'var(--green)',
  'var(--blue)',
  'var(--pink)',
  'var(--red)',
  'var(--yellow)',
  'var(--pink)'
]

  let name = document.getElementsByClassName("ldt");

  for (instance of name) {
    instance.innerHTML = instance.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    let letters = document.getElementsByClassName("letter");

    var i;
    for (i = 0; i < letters.length; i++) {
      letters[i].style.color = colors[i];
    }
  }

});