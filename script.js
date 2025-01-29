  console.log("page loaded")
   const button = document.getElementById("button")
   const container = document.getElementById("contain")
    button.addEventListener ("click", function () {
        const photo = document.createElement("div")
        photo.classList.add("photo")
        container.appendChild(photo)
        button.remove()
    })

