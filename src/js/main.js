import _ from "lodash";
import { logoPartners } from "./asset.js";

const $header = document.querySelector("header");
const $illustrationMain = document.querySelector("#illustration");

// Set a banner on top of page
const $celebrate = document.createElement("div");
$celebrate.setAttribute("id", "celebrate");
$celebrate.innerHTML = `<p>🎉 To celebrate Spence's launch, we will be waiving all fees for the entire month of April. <a href="#" title="Get offers">You will be receiving 100% of the earnings.</a> 🎉</p>`;
$header.prepend($celebrate);

// Set a call-to-action card on illustration of main
const $ctaCard = document.createElement("div");
$ctaCard.setAttribute("class", "card");
$ctaCard.innerHTML =  `<p>April Earnings</p>
                       <hr>
                       <p><span class="bold">$272.21</span></p>
                       <button type="button">Withdraw</button>
                       `;
$illustrationMain.appendChild($ctaCard);

// Set partners on the DOM
const $partnerSection = document.querySelector("#partners");
let $documentX = document.body.clientWidth;

const displayLogoPartners = () => {
    
    if($documentX <= 414){

        for(let i = 0; i < logoPartners.length - 5; i++){
            const $imgLogo = document.createElement("img");
            $imgLogo.setAttribute("src", logoPartners[i]);
            $partnerSection.appendChild($imgLogo);
        }

    } else if($documentX >= 414 && $documentX < 768){
        
        for(let i = 0; i < logoPartners.length - 3; i++){
            const $imgLogo = document.createElement("img");
            $imgLogo.setAttribute("src", logoPartners[i]);
            $partnerSection.appendChild($imgLogo);
        }

    } else {

        logoPartners.forEach( logo => {
            const $imgLogo = document.createElement("img");
            $imgLogo.setAttribute("src", logo);
            $partnerSection.appendChild($imgLogo);
        });

    }
}

window.addEventListener("load", displayLogoPartners);

// Handle responsive menu's display for mobile view
const $hamburger = document.querySelector("#hamburger");
const $mainMenu = document.querySelector("#main-menu");
const $login = document.querySelector("#login");
const $itemsMenu = document.querySelectorAll(".item-menu");

$hamburger.addEventListener("click", () => {
    $hamburger.classList.toggle("open");
    $hamburger.classList.toggle("close");
    $mainMenu.classList.toggle("display-menu");
    $login.classList.toggle("display-login");
});

for(let item of $itemsMenu){
    item.addEventListener("click", () => {
        $hamburger.classList.toggle("open");
        $hamburger.classList.toggle("close");
        $mainMenu.classList.toggle("display-menu");
        $login.classList.toggle("display-login"); 
    });
}
