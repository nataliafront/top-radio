// const sandwich = function() {
//   let sandwichButton = document.querySelector('.sandwich__open-btn');
//   let sandwichClose = document.querySelector('.sandwich__close-btn');
//   let content = document.querySelector('.sandwich__content');
//   let menu = document.querySelector('.sandwich__menu');

//   sandwichButton.addEventListener('click', function() {
//     menu.classList.add('sandwich__menu--opened');
//     content.classList.add('sandwich__content--active');
//     document.body.style.overflow = 'hidden';
//   });

//   content.addEventListener('click', function() {
//       menu.classList.remove('sandwich__menu--opened');
//       this.classList.remove('sandwich__content--active');
//       document.body.style.overflow = 'visible';
//   });

//   sandwichClose.addEventListener('click', function() {
//       menu.classList.remove('sandwich__menu--opened');
//       content.classList.remove('sandwich__content--active');
//       document.body.style.overflow = 'visible';
//   });
// };

// sandwich();


var sandwich = function sandwich() {
  var sandwichButton = document.querySelector('.sandwich__open-btn');
  var sandwichClose = document.querySelector('.sandwich__close-btn');
  var menu = document.querySelector('.sandwich__content');
  sandwichButton.addEventListener('click', function () {
    menu.classList.add('sandwich__content--opened');
  });
  sandwichClose.addEventListener('click', function () {
    menu.classList.remove('sandwich__content--opened');
  });
};

sandwich();

class Slider {
    constructor (rangeElements, valueElements) {
      this.rangeElements = rangeElements;
      this.valueElements = valueElements;
  
      // Attach a listener to "change" event
      this.rangeElements.forEach(e => {
        e.addEventListener('input', this.updateSlider.bind(this));
      });
    }
  
    // Initialize the slider
    init() {
      this.updateSlider()
    }
  
    generateBackground(value, min, max) { 
      let percentage = (value - min) / (max - min) * 100;
      return 'linear-gradient(to right, #FF8E26, #FF8E26 ' + percentage + '%, #E8E8E8 ' + percentage + '%, #E8E8E8 100%)'
    }
  
    updateSlider (newValue) {
      this.rangeElements.forEach(e => {
        e.style.background = this.generateBackground(e.value, e.min, e.max);
        // e.oninput = function() {
        //   var slide1 = parseFloat(e.value);
        //   e.parentElement.querySelector('.range-slider__field').value = slide1;
        // }
      })
    
      this.valueElements.forEach(e => {
        e.oninput = function() {
          let percentage = (e.value - e.min) / (e.max - e.min) * 100;
          e.parentElement.querySelector('.range-slider__line').value = e.value;
          e.parentElement.querySelector('.range-slider__line').style.background = 'linear-gradient(to right, #1C47B7, #1C47B7 ' + percentage + '%, #fff ' + percentage + '%, #ffffff 100%)';
        }
      });
    }
  }
  
  let rangeElements = document.querySelectorAll('.range-slider__line');
  let valueElements = document.querySelectorAll('.range-slider__field');
  
  if (rangeElements) {
    let slider = new Slider(rangeElements, valueElements)
  
    slider.init()
  }