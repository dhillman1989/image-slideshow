const slideshow = (images) => {
  //get container ready to build in
  const container = document.querySelector(".container");

  const imagesArray = images;

  let currPic = 0;

  const quicknavContents = () => {
    let quicknav = imagesArray
      .map(
        (img, i) =>
          `<div class="quicknav__disc ${
            i == currPic ? "quicknav__disc--active" : ""
          }" data-id="${i}"> </div>`
      )
      .join("");

    return quicknav;
  };

  //create slideshow
  const slideshow = document.createElement("div");

  slideshow.innerHTML = `<div class="slideshow">
  <div class="slideshow__control slideshow__control--prev">Previous</div>
  <div class="slideshow__frame">
    <img
      class="slideshow__img"
      src="${imagesArray[currPic]}"
    />
  </div>
  <div class="slideshow__control slideshow__control--next">Next</div>
</div>
<div class="quicknav">
    ${quicknavContents()}
</div>`;

  ///CONSTRUCT PAGE

  container.appendChild(slideshow);

  ///
  /// IMAGE SLIDESHOW CONTROLS
  ///

  const image = document.querySelector(".slideshow__img");

  setInterval(() => {
    currPic == imagesArray.length - 1 ? (currPic = 0) : (currPic += 1);
    image.src = imagesArray[currPic];
    document.querySelector(".quicknav").innerHTML = quicknavContents();
    addQuicknavEvents();
  }, 5000);

  //add event listener to change picture based on quicknav

  const addQuicknavEvents = () => {
    const quicknavButtons = document.querySelectorAll(".quicknav__disc");
    quicknavButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        currPic = parseInt(e.target.dataset.id);
        image.src = imagesArray[currPic];
        document.querySelector(".quicknav").innerHTML = quicknavContents();
        addQuicknavEvents();
      })
    );
  };

  const addControls = () => {
    const prev = document.querySelector(".slideshow__control--prev");
    const next = document.querySelector(".slideshow__control--next");

    next.addEventListener("click", () => {
      currPic == imagesArray.length - 1 ? (currPic = 0) : (currPic += 1);
      image.src = imagesArray[currPic];
      document.querySelector(".quicknav").innerHTML = quicknavContents();
      addQuicknavEvents();
    });

    prev.addEventListener("click", () => {
      currPic == 0 ? (currPic = imagesArray.length - 1) : (currPic -= 1);
      image.src = imagesArray[currPic];
      -+0;
      document.querySelector(".quicknav").innerHTML = quicknavContents();
      addQuicknavEvents();
    });
  };

  addQuicknavEvents();
  addControls();
};

export default slideshow;
