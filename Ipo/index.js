
function showMenu(id){
    menu=document.getElementById('menu');
    console.log(menu);
    const element = document.getElementById("nav");
    var section = document.getElementById(id);
    if (element.className == "hide") {
        element.className = "show";
        section.classList.add("platformMargin");
      } else {
        element.className = "hide";
        section.classList.remove("platformMargin");
        }
        
      }
function showProduct(id){
  var product=document.querySelector(id);
  product.classList.remove('hide-product');
  

}
function toggleContent(id){
  var content=document.querySelector(id);
  if(content.className=="hide-content"){
    content.className='faq-content';
  }else{
    content.className='hide-content';
  }
}



