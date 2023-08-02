const partnerImages = [
  "assets/partner-1.png",
  "assets/partner-2.png",
  "assets/partner-3.png",
  "assets/partner-4.png",
  "assets/partner-5.png",
  "assets/partner-6.png",
  "assets/partner-7.png",
  "assets/partner-8.png",
  "assets/partner-9.png",
];

function displayPartnerLogos() {
  const partnersDiv = document.getElementById("partnersDiv");

  partnerImages.forEach((imageUrl) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "Partner Logo";
    imgElement.classList.add("partner-logo");

    partnersDiv.appendChild(imgElement);
  });
}

displayPartnerLogos();
