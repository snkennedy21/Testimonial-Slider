'use strict';

// Testimonial IIFE\
(function () {

  // DOM Variables
  let buttons = document.querySelectorAll('.button');
  let buttonLeft = document.querySelector('.left-button');
  let buttonRight = document.querySelector('.right-button');
  let image = document.querySelector('.image');
  let text = document.querySelector('.text');
  let name = document.querySelector('.name');
  let role = document.querySelector('.role');
  let dots = document.querySelectorAll('.dot');


  // Testimonal Class and Instances
  const Testimonial = class {
    constructor(image, text, name, role) {
      this.image = image;
      this.text = text;
      this.name = name;
      this.role = role;
    }
  }
  let testimonial1 = new Testimonial('customer-1.jpg', '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quisquam suscipit nisi quia nihil est quam nemo, modi magnam non culpa harum. Neque quo atque repellat a maxime impedit dolorem!"', '-Mark Tyler', 'Senior Product Manager at BP Commercial');
  let testimonial2 = new Testimonial('customer-2.jpg', '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus assumenda sint quisquam! Error provident, dignissimos, praesentium cupiditate facere inventore exercitationem repudiandae velit odit eum facilis deleniti ea illo adipisci?"', '-Ishaan Singh', 'Associate Marketing Director at KCC Industrial');
  let testimonial3 = new Testimonial('customer-3.jpg', '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla saepe corporis voluptates dicta consectetur. Incidunt maiores sit delectus, ab numquam quam quasi culpa autem voluptatibus, qui saepe quos ut iste!"', '-Chloe Fleur', 'Product Design Lead at BNC Inc');
  let testimonial4 = new Testimonial('customer-4.jpg', '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt ullam consequuntur nihil, magni illo vero dolorum iure, quos omnis repellendus a animi consequatur vel. Ad maxime cumque nulla commodi!"', '-Jessica Stevens', 'Assistant Manager of Sales at KPP Corp');

  let testimonialsArray = [testimonial1, testimonial2, testimonial3, testimonial4];

  let index = 0; // index is used for traversing the carousel

  // Buttons
  buttonLeft.addEventListener('click', function () {
    index--;
    if (index < 0) {
      index = testimonialsArray.length - 1;
    }
    image.src = testimonialsArray[index].image;
    text.textContent = testimonialsArray[index].text;
    name.textContent = testimonialsArray[index].name;
    role.textContent = testimonialsArray[index].role;

    dots.forEach((dot) => {
      dot.style.backgroundColor = '#fff'
    });
    dots[index].style.backgroundColor = '#bac8ff';
  })

  buttonRight.addEventListener('click', function () {
    index++;
    if (index > testimonialsArray.length - 1) {
      index = 0;
    }
    image.src = testimonialsArray[index].image;
    text.textContent = testimonialsArray[index].text;
    name.textContent = testimonialsArray[index].name;
    role.textContent = testimonialsArray[index].role;

    dots.forEach((dot) => {
      dot.style.backgroundColor = '#fff'
    });
    dots[index].style.backgroundColor = '#bac8ff';
  })


  // Dot Buttons
  dots.forEach((dot) => {
    dot.addEventListener('click', function () {
      dots.forEach((dot) => {
        dot.style.backgroundColor = '#fff'
      });
      dot.style.backgroundColor = '#bac8ff';

      let dotsArray = Array.from(dots);
      index = dotsArray.indexOf(dot);

      image.src = testimonialsArray[index].image;
      text.textContent = testimonialsArray[index].text;
      name.textContent = testimonialsArray[index].name;
      role.textContent = testimonialsArray[index].role;
    })
  })

})();