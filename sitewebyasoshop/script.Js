console.log("hello, wolrd")

// Selectionner les élements répondant au selecteur .panier-add
let panier_array = document.querySelectorAll(".panier-add")
console.log(panier_array)

// Pour chacun des elements de l'array
panier_array.forEach(function(element) {

    // Ajouer un écouteur d'évènemen
    element.addEventListener(
        // type d'évenement
        'click', 
        //ce qui se passe quand l'évènement se déclenche
        function(event) {
        alert("Cet objet est ajoué au panier")
        console.log(event);

        // Si l'élement possède la classe chaussure1
        if(element.classList.contains("chaussure1")) {
            // récupérer le panier dans le local storage
            let panier = JSON.parse(window.localStorage.getItem("panier"));


            if(panier) {
                if(panier["chaussure1"]) {
                    panier["chaussure1"]++
                } else {
                    panier["chaussure1"]= 1;
                }
            } else {
                panier = {
                    "chaussure1":1
                }
            }
 // Remettre le panier à jour dans le localStorage. 
            window.localStorage.setItem("panier", JSON.stringify(panier))
        }
    })
})