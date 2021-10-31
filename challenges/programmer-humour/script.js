fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const img = document.querySelector("#img");
    img.src = data.img;
  })
  .catch((error) => console.log(`Error: ${error}`));
