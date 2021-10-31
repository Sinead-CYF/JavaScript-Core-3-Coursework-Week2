const imgWrapper = document.querySelector("#img-wrapper");
const btn1 = document.querySelector("#btn1");

function addImg(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        const img = document.querySelector("#img");
        imgWrapper.style.display = "block";
        img.src = data.message;
    })
    .catch(function (error){
        console.log(`Error: ${error}`);
    });
}

btn1.addEventListener("click", addImg);

 