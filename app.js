const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
     document.getElementById("colorcode").innerHTML = randomCode;
     console.log(randomCode);
}

document.getElementById("btn").addEventListener("click", getcolor);

getcolor();


