document.addEventListener("DOMContentLoaded", function() {

})

class Bird {
    constructor(bird) {
        this.id = bird.id;
        this.name = bird.name; 
        this.species = bird.species;
        this.sightings = [];
    }

    static createBird() {
        // this caputes input from the user and preserves it in the database
        // statis methods are not callable on instances of the class only on the class itself

        // querySelector returns first instance 
        // classSelector returns an array 
        let birdForm = document.querySelector(".new-bird-form")
        classForm.addEventListener("submit", function(event) {
            event.preventDefault()
            
                // captures form data
    let formData = {
        name: e.target[0].value,
        species: e.target[0].value 
    }

    // configObj will tell fetch that this is a POST request and stringify data
    let configObj = {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            // data exchanged between brwoser and server is sent as a text
            // data assigned to the body of fetch request must be a string
            body: JSON.stringify(formData)
    }

    fetch("http://locahost:3000/birds", configObj)
        .then(response => response.json()) 
        })
    


    }

    // method to add a Bird instance from User submitted data to DOM
    // certain HTML element (p tag) is being dynamically generated to hold Bird's name
    // then p tag is being appended to appropriate div container
    addBirdToDom() {
        let bird = document.querySelector(".bird")
        let pTag = document.createElement("p")
        pTag.innerText = this.name
    }
}