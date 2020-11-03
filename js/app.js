// DOM elements
const elements = document.querySelectorAll('.wrapper-left .main-menu li');
const itemsElements = document.querySelectorAll('.item');

// Loop
for (let i = 0; i < elements.length; i++) {

   elements[i].addEventListener('click', function () {

      elements.forEach(function (li) {
         // Remove class active
         li.classList.remove('active');
      });
      //  Add class active
      this.classList.add('active');

      // Change Content
      let valueLi = this.getAttribute("data-li");

      itemsElements.forEach(function (item) {
         item.style.display = 'none';
      });

      if (valueLi === 'angularjs') {
         document.querySelector('.' + valueLi).style.display = "block";
      }
      else if (valueLi === 'nodejs') {
         document.querySelector('.' + valueLi).style.display = 'block';
      } 
      else if (valueLi === 'reactjs') {
         document.querySelector('.' + valueLi).style.display = 'block';
      } 
      else if (valueLi === 'vuejs') {
         document.querySelector('.' + valueLi).style.display = 'block';
      }
   });
}