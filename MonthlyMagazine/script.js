$('nav ul li.btn span').click(function(){
    $('nav ul div.items').toggleClass("show");
    $('nav ul li.btn span').toggleClass("show");
  });

  function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}

const leftpara = document.getElementById('para');
        const button = document.getElementById('button');
        function Func(){
            if(leftpara.style.display == 'none'){
                leftpara.style.display = 'block'  ; 
            }
            else{
                leftpara.style.display = 'none';
            }
        }