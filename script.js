  console.log("page loaded")
   const button = document.getElementById("button")
   const container = document.getElementById("contain")
    button.addEventListener ("click", function () {
      button.remove()
      const text = document.createElement("h2")
      container.appendChild(text)
      text.textContent = "200 streak🔥! Too easy 🕺"
      const photo = document.createElement("div")
      photo.classList.add("photo")
      container.appendChild(photo)
      

    })
    function createPhoto (){
        const photo = document.createElement("div")
        photo.classList.add("photo")
        container.appendChild(photo)
        button.remove()
    }
     function createText (){
        const text = document.createElement("h2")
        container.appendChild(text)
     }

