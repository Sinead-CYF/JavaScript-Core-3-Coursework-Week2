const imgWrapper = document.querySelector("#img-wrapper");
const btn1 = document.querySelector("#btn1");

function addImg(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = data.message;
        imgWrapper.appendChild(img);
    })
    .catch(function (error){
        console.log(`Error: ${error}`);
    });
}

btn1.addEventListener("click", addImg);

 