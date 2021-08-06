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
//let $screenWindow = window.screen.width;
//console.log($screenWindow);
let $documentX = document.body.clientWidth;

const displayLogoPartners = () =>{
    
    if($documentX <= 350){
        for(let i = 0; i < logoPartners.length - 3; i++){
            const $imgLogo = document.createElement("img");
            $imgLogo.setAttribute("src", logoPartners[i]);
            $partnerSection.appendChild($imgLogo);
       }
    } else if($documentX >= 350 && $documentX < 768){
        for(let i = 0; i < logoPartners.length - 6; i++){
            const $imgLogo = document.createElement("img");
            $imgLogo.setAttribute("src", logoPartners[i]);
            $partnerSection.appendChild($imgLogo);
       }
    } else{
        logoPartners.forEach( logo => {
            const $imgLogo = document.createElement("img");
            $imgLogo.setAttribute("src", logo);
            $partnerSection.appendChild($imgLogo);
        });
    }
}

window.addEventListener("load", displayLogoPartners);
document.addEventListener("resize", () => {
    $partnerSection.innerHTML = "";
    displayLogoPartners()
});