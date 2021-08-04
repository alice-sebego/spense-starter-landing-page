const $header = document.querySelector("header");

const $celebrate = document.createElement("div");
$celebrate.setAttribute("id", "celebrate");
$celebrate.innerHTML = `<p>🎉 To celebrate Spence's launch, we will be waiving all fees for the entire month of April. <a href="#" title="Get offers">You will be receiving 100% of the earnings.</a> 🎉</p>`;
$header.prepend($celebrate);