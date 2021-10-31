const imgWrapper = document.querySelector("#img-wrapper");
const btn1 = document.querySelector("#btn1");

function addImg() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("#img");
      imgWrapper.style.display = "block";
      img.src = data.message;
    })
    .catch((error) => console.log(`Error: ${error}`));
}

btn1.addEventListener("click", addImg);
