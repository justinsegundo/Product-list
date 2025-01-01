const productList = [
  {
    productName: "Greatest White Single",
    price: 9.0,
    img: "images/great-taste-white-single.webp",
  },
  {
    productName: "Greatest White Double",
    price: 15.0,
    img: "images/great-taste-white-double.jfif",
  },
  {
    productName: "Nescafe creamywhite single",
    price: 9.0,
    img: "images/nescafe-creamywhite-single.png",
  },
  {
    productName: "Nescafe creamywhite double",
    price: 15.0,
    img: "images/nescafe-creamywhite-double.webp",
  },
  {
    productName: "Swack bear brand",
    price: 13.0,
    img: "images/swack-bearbrand.webp",
  },
  {
    productName: "Milo",
    price: 10.0,
    img: "images/milo.webp",
  },
  {
    productName: "Coffee Stick",
    price: 4.0,
    img: "images/coffeestick.png",
  },
  {
    productName: "Nescafe Original",
    price: 15.0,
    img: "images/nescafe-orignal.webp",
    img2: "images/nescafe-original-single.jpg",
  },
  {
    productName: "Mighty Puti",
    price: 9.0,
    img: "images/mightyputi.webp",
  },
  {
    productName: "Mighty Pula",
    price: 9.0,
    img: "images/mightypula.webp",
  },
  {
    productName: "Winston",
    price: 10.0,
    img: "images/winston.webp",
  },
  {
    productName: "Ariel Powder",
    price: 16.0,
    img: "images/ariel-powder.jpg",
  },
  {
    productName: "Bareta bar",
    price: 6.0,
    img: "images/baretabar.webp",
  },
  {
    productName: "Lion tiger katol",
    price: 3.0,
    img: "images/lion-katol.jpg",
  },
  {
    productName: "biogesic",
    price: 6.0,
    img: "images/biogesic.webp",
  },
  {
    productName: "Pancit Canton",
    price: 13.0,
    img: "images/pancit-canton-chilimansi.jpg",
    img2: "images/pancit-canton-hot.jpg",
  },
  {
    productName: "Lucky Me",
    price: 13.0,
    img: "images/lucky-mae-chicken.jpg",
    img2: "images/lucky-mae-beef.jpg",
  },
  {
    productName: "Holiday Carne Norte",
    price: 35.0,
    img: "images/holiday-carnenorte.webp",
    img2: "images/holiday-carnenorte-small.jpg",
  },
  {
    productName: "Holiday Beef Loaf",
    price: 25.0,
    img: "images/holiday-beef-loaf.jpg",
    img2: "images/holiday-beef-loaf-hover.jfif",
  },
  {
    productName: "Fiesta Beef Loaf",
    price: 26.0,
    img: "images/fiesta-beef-loaf.jpg",
    img2: "images/fiesta-beef-loaf-hover.jfif",
  },
  {
    productName: "Whisper With Wings",
    price: 8.0,
    img: "images/whisper-withwings.webp",
  },
  {
    productName: "Safeguard",
    price: 10.0,
    img: "images/safeguard.png",
  },
  {
    productName: "Bioderm",
    price: 10.0,
    img: "images/bioderm.png",
    img2: "images/bioderm-hover.webp",
  },
  {
    productName: "Surf Powder",
    price: 9.0,
    img: "images/surfpowder.webp",
    img2: "images/surfpowder-pink.webp",
  },
  {
    productName: "Wings Powder",
    price: 8.0,
    img: "images/wings-powder.webp",
    img2: "images/wings-powder-green.webp",
  },
  {
    productName: "Pulbos",
    price: 20.0,
    img: "images/pulbos.webp",
  },
  {
    productName: "Tissue",
    price: 20.0,
    img: "images/tissue.jpg",
  },
  {
    productName: "Lutos Baraha",
    price: 35.0,
    img: "images/lotus.jpg",
  },
  {
    productName: "Redhorse",
    price: 125.0,
    img: "images/redhorse.jpg",
    img2: "images/redhorse-500.webp",
  },
  {
    productName: "Coke Dako",
    price: 45.0,
    img: "images/coke.jpg",
    img2: "images/coke-small.jfif",
  },
  {
    productName: "Royal Dako",
    price: 45.0,
    img: "images/royal.jpg",
  },
  {
    productName: "Sprite Dako",
    price: 45.0,
    img: "images/sprite.webp",
    img2: "images/sprite-hover.webp",
  },
  {
    productName: "Cobra",
    price: 18.0,
    img: "images/cobra.jpg",
  },
  {
    productName: "diaper",
    price: 10.0,
    img: "images/eq-medium-diaper.jpg",
  },
  {
    productName: "happy diaper",
    price: 8.0,
    img: "images/happy-diaper.webp",
  },
  {
    productName: "Cutton buds",
    price: 10.0,
    img: "images/cotton-buds.jpg",
  },
];

function productSearch() {
  const result = document.querySelector(".results");
  const errorMsg = document.querySelector(".error-msg");
  const inputElement = document.querySelector("#input");
  const inputText = inputElement.value.toLowerCase();
  const product = productList.find((item) =>
    item.productName.toLowerCase().includes(inputText)
  );

  let productImg = `<img src=${product.img} />`;

  if (product.productName === "Pancit Canton") {
    productImg += `<img src=${product.img2} class="img-hover"/>`;
  } else if (product.productName === "Holiday Carne Norte") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Nescafe Original") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Holiday Beef Loaf") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Fiesta Beef Loaf") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Bioderm") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Surf Powder") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Redhorse") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Coke Dako") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Sprite Dako") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Wings Powder") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  } else if (product.productName === "Lucky Me") {
    productImg += `<img src=${product.img2} class="img-hover" />`;
  }

  result.innerHTML = `<div class="l-side">
  ${productImg}
  </div>
  <div class="r-side">
  <h1 class="product-name">${product.productName}</h1>
  <span class="span">&#8369;${product.price}.00</span>
  </div>
  `;
  inputElement.value = "";
  const rightSide = document.querySelector(".r-side");
  if (product.productName === "Holiday Carne Norte") {
    rightSide.innerHTML += `<h1 class="product-name">Holiday Carne Norte Small</h1>
    <span>&#8369;25.00</span>`;
  } else if (product.productName === "Nescafe Original") {
    rightSide.innerHTML += `<h1 class="product-name">Nescafe Original Single</h1>
    <span>&#8369;9.00</span>`;
  } else if (product.productName === "Lutos Baraha") {
    rightSide.innerHTML += `<h1 class="product-name">If not lutos baraha</h1>
    <span>&#8369;30.00</span>`;
  } else if (product.productName === "Redhorse") {
    rightSide.innerHTML += `<h1 class="product-name">Red horse 500</h1>
    <span>&#8369;70.00</span>`;
  } else if (product.productName === "Sprite Dako") {
    rightSide.innerHTML += `<h1 class="product-name">Sprite Gamay</h1>
    <span>&#8369;15.00</span>`;
  }

  if (!inputText.trim()) {
    result.innerHTML = "";
    errorMsg.textContent = "Please enter a product name";
  } else {
    errorMsg.textContent = "";
  }
}
