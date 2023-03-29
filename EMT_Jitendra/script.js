$('nav ul li.btn span').click(function(){
  $('nav ul div.items').toggleClass("show");
  $('nav ul li.btn span').toggleClass("show");
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});



function mouseOver() {
  document.querySelector('#faq-img').setAttribute("src","Images/FAQs_1.png");
}


function mouseOut() {
  document.querySelector('#faq-img').setAttribute("src","Images/FAQs.png");
}


function footerToggle(footerBtn) {
  $(footerBtn).toggleClass("btnActive");
  $(footerBtn).next().toggleClass("active");
}