const cardData = [
  {
    imageSrc: "assets/card-1.png",
    title: "Lorem ipsum",
    text: "Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content",
  },
  {
    imageSrc: "assets/card-1.png",
    title: "Lorem ipsum ",
    text: "Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content",
  },
  {
    imageSrc: "assets/card-1.png",
    title: "Lorem ipsum ",
    text: "Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content",
  },
  {
    imageSrc: "assets/card-1.png",
    title: "Lorem ipsum ",
    text: "Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content",
  },
  {
    imageSrc: "assets/card-1.png",
    title: "Lorem ipsum ",
    text: "Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content",
  },
  {
    imageSrc: "assets/card-1.png",
    title: "Lorem ipsum ",
    text: "Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content",
  },
];

function createCard(cardObj) {
  const cardContainer = document.getElementById("cards-container");

  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = cardObj.imageSrc;
  image.alt = "Image";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("div");
  cardTitle.className = "title";
  cardTitle.textContent = cardObj.title;

  const cardText = document.createElement("div");
  cardText.className = "text";
  cardText.textContent = cardObj.text;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(image);
  card.appendChild(cardBody);

  cardContainer.appendChild(card);
}

for (const cardObj of cardData) {
  createCard(cardObj);
}
