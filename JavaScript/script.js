
$('nav ul li.btn span').click(function(){
    $('nav ul div.items').toggleClass("show");
    $('nav ul li.btn span').toggleClass("show");
  });


const heading = document.querySelector(".hero-title");
let text = "Cut your losses and let your profits run.";
let endvalue = 1;

let id = setInterval(function () {
    heading.textContent = text.substring(0,endvalue);
    endvalue++;
    console.log(endvalue);
    if (endvalue > text.length) {
        window.clearInterval(id);
    }
}, 100)



function products() {
    const num = Math.floor(Math.random() * 5) + 1;

    var col1 = document.querySelector(".custo2 .p1");
    var col2 = document.querySelector(".custo2 .p2");
    var col3 = document.querySelector(".custo2 .p3");
    var col4 = document.querySelector(".custo2 .p4");
    var col5 = document.querySelector(".custo2 .p5");
    var col6 = document.querySelector(".custo2 .p6");
    var col7 = document.querySelector(".custo2 .p7");

    if (num == 1) {
        col2.style.backgroundColor = "white";
        col2.style.color = "rgb(18 155 44)";
        col3.style.backgroundColor = "white";
        col3.style.color = "rgb(18 155 44)";
        col4.style.backgroundColor = "white";
        col4.style.color = "rgb(18 155 44)";
        col5.style.backgroundColor = "white";
        col5.style.color = "rgb(18 155 44)";
        col6.style.backgroundColor = "white";
        col6.style.color = "rgb(18 155 44)";
        col7.style.backgroundColor = "white";
        col7.style.color = "rgb(18 155 44)";

        col1.style.backgroundColor = "rgb(18 155 44)";
        col1.style.color = "white";
        document.querySelector(".product-img img").setAttribute("src", "Images/equity-img.png");
        document.querySelector(".product-content h1").innerHTML = "Equity";
        document.querySelector(".product-content h3").innerHTML = "Equity is also known as shareholders equity. Equity consists of money that would remain if company assets were sold and all of its debt was paid off. In a nutshell, equity is a company net asset less liabilities. Equity is the company capital raised, which is then used to purchase assets, invests in projects, and acquisitions....";
    }
    else if (num === 2) {
        col1.style.backgroundColor = "white";
        col1.style.color = "rgb(18 155 44)";
        col3.style.backgroundColor = "white";
        col3.style.color = "rgb(18 155 44)";
        col4.style.backgroundColor = "white";
        col4.style.color = "rgb(18 155 44)";
        col5.style.backgroundColor = "white";
        col5.style.color = "rgb(18 155 44)";
        col6.style.backgroundColor = "white";
        col6.style.color = "rgb(18 155 44)";
        col7.style.backgroundColor = "white";
        col7.style.color = "rgb(18 155 44)";

        col2.style.backgroundColor = "rgb(18 155 44)";
        col2.style.color = "white";
        document.querySelector(".product-img img").setAttribute("src", "Images/IPO.png");
        document.querySelector(".product-content h1").innerHTML = "IPO";
        document.querySelector(".product-content h3").innerHTML = "IPO is a public offering in which a private company (that has a handful of shareholders) is taken public by listing it on the stock exchange and offering its shares to investors in the primary market. A process used in IPO helps in efficient price discovery of the securities. The issuer provides a price band within which investors may bid, and the final price is determined by the issuer only after the bidding process has concluded. Prospective buyers are given information about the proposed offering in the form of a lengthy document known as a prospectus....";
    }

    else if (num === 3) {
        col1.style.backgroundColor = "white";
        col1.style.color = "rgb(18 155 44)";
        col2.style.backgroundColor = "white";
        col2.style.color = "rgb(18 155 44)";
        col4.style.backgroundColor = "white";
        col4.style.color = "rgb(18 155 44)";
        col5.style.backgroundColor = "white";
        col5.style.color = "rgb(18 155 44)";
        col6.style.backgroundColor = "white";
        col6.style.color = "rgb(18 155 44)";
        col7.style.backgroundColor = "white";
        col7.style.color = "rgb(18 155 44)";

        col3.style.backgroundColor = "rgb(18 155 44)";
        col3.style.color = "white";
        document.querySelector(".product-img img").setAttribute("src", "Images/ETF.png");
        document.querySelector(".product-content h1").innerHTML = "ETF";
        document.querySelector(".product-content h3").innerHTML = "An ETF, also known as an exchange-traded fund is a pooled investment of assets that functions similarly to a mutual fund. Unlike mutual funds, ETFs typically track a specific index, sector, commodity, etc. ETF prices reflect the Net asset value (NAV) of the basket in which it invests...";
    }

    else if (num == 4) {
        col1.style.backgroundColor = "white";
        col1.style.color = "rgb(18 155 44)";
        col2.style.backgroundColor = "white";
        col2.style.color = "rgb(18 155 44)";
        col3.style.backgroundColor = "white";
        col3.style.color = "rgb(18 155 44)";
        col5.style.backgroundColor = "white";
        col5.style.color = "rgb(18 155 44)";
        col6.style.backgroundColor = "white";
        col6.style.color = "rgb(18 155 44)";
        col7.style.backgroundColor = "white";
        col7.style.color = "rgb(18 155 44)";

        col4.style.backgroundColor = "rgb(18 155 44)";
        col4.style.color = "white";
        document.querySelector(".product-img img").setAttribute("src", "Images/currency.png");
        document.querySelector(".product-content h1").innerHTML = "Currency";
        document.querySelector(".product-content h3").innerHTML = "Foreign exchange is the most liquid, decentralised, over-the-counter market, with a daily volume of more than $6.6 trillion in 2019. Individuals and institutions from all over the world buy and sell currencies on the currency market...";
    }

    else if (num == 5) {
        col1.style.backgroundColor = "white";
        col1.style.color = "rgb(18 155 44)";
        col2.style.backgroundColor = "white";
        col2.style.color = "rgb(18 155 44)";
        col3.style.backgroundColor = "white";
        col3.style.color = "rgb(18 155 44)";
        col4.style.backgroundColor = "white";
        col4.style.color = "rgb(18 155 44)";
        col6.style.backgroundColor = "white";
        col6.style.color = "rgb(18 155 44)";
        col7.style.backgroundColor = "white";
        col7.style.color = "rgb(18 155 44)";

        col5.style.backgroundColor = "rgb(18 155 44)";
        col5.style.color = "white";
        document.querySelector(".product-img img").setAttribute("src", "Images/mutual-fund.png");
        document.querySelector(".product-content h1").innerHTML = "Mutual Fund";
        document.querySelector(".product-content h3").innerHTML = "A mutual fund is a financial vehicle that draws money from investors and invests those funds in various securities. The mutual fund's holdings are referred to as its portfolio. Professional money managers manage the fund and allocate funds in order to generate the best returns for the investors...";
    }

    else if (num == 6) {
        col1.style.backgroundColor = "white";
        col1.style.color = "rgb(18 155 44)";
        col2.style.backgroundColor = "white";
        col2.style.color = "rgb(18 155 44)";
        col3.style.backgroundColor = "white";
        col3.style.color = "rgb(18 155 44)";
        col4.style.backgroundColor = "white";
        col4.style.color = "rgb(18 155 44)";
        col5.style.backgroundColor = "white";
        col5.style.color = "rgb(18 155 44)";
        col7.style.backgroundColor = "white";
        col7.style.color = "rgb(18 155 44)";

        col6.style.backgroundColor = "rgb(18 155 44)";
        col6.style.color = "white";
        document.querySelector(".product-img img").setAttribute("src", "Images/commodities.png");
        document.querySelector(".product-content h1").innerHTML = "Commodities";
        document.querySelector(".product-content h3").innerHTML = "A commodity market is one that deals in trading raw materials or primary products rather than manufacturing products, such as cocoa, fruit, and sugar. Commodity pricing is primarily influenced by economic development and technological advances, supply, demand, and scarcity....";
    }

    else {
        col1.style.backgroundColor = "white";
        col1.style.color = "rgb(18 155 44)";
        col2.style.backgroundColor = "white";
        col2.style.color = "rgb(18 155 44)";
        col3.style.backgroundColor = "white";
        col3.style.color = "rgb(18 155 44)";
        col4.style.backgroundColor = "white";
        col4.style.color = "rgb(18 155 44)";
        col5.style.backgroundColor = "white";
        col5.style.color = "rgb(18 155 44)";
        col6.style.backgroundColor = "white";
        col6.style.color = "rgb(18 155 44)";

        col7.style.backgroundColor = "rgb(18 155 44)";
        col7.style.color = "white";
        document.querySelector(".product-img img").setAttribute("src", "Images/futureoptions.png");
        document.querySelector(".product-content h1").innerHTML = "Futures & Options";
        document.querySelector(".product-content h3").innerHTML = "Futures are an exchange-traded standardized derivative agreement to buy or sell the underlying asset at a pre-determined price on a specific date. A stock, index, currency, or commodity can serve as the underlying asset. The contract is directly executed via a regulated and organized exchange and the parties of the futures contract are obligated to carry out the terms of the agreement....";
    }


    setTimeout(products, 5000);

}

products();





var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});


function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}