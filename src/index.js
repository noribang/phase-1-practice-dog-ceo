// console.log('%c HI', 'color: firebrick')


/*
  Challenge 1:
  1. on page load, fetches the images using the url above 
  2. parses the response as JSON
  3. adds image elements to the DOM for each image in the array
*/

/* Send request to get dog images from API */
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogContainer = document.getElementById("dog-image-container")
const dogBreedsList = document.getElementById("dog-breeds")
const li = document.getElementsByTagName("li")
// console.log(li)
// console.log(dogContainer)
let dogImg = document.createElement("img")
// console.log(dogImg)

function breedImages() {
    return fetch(imgUrl)
    // console.log(dogs)
        .then(function(response) {
            return response.json()
            // console.log(dogsResponse)
        })
        .then(function(data) {
            // console.log(data)
            // console.log(data.message)
            for (let i = 0; i <data.message.length; i++) {
                // console.log(data.message[i])
                const dogImg = document.createElement("img")
                dogImg.src = data.message[i]
                dogImg.width = "200"
                // dogImg.height = "300"
                dogContainer.appendChild(dogImg)
            }
        })
        .catch(function(error) {
            console.log(error.message)
        })
}
breedImages()

/*
  Challenge 2:
  1. on page load, fetches all the dog breeds using the url abov 
  2. adds the breeds to the page in the <ul> provided in index.html
*/
function showBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    
    // console.log(dogBreedsList)
    /* Send request to get dog-breed images from API */
    return fetch(breedUrl)
    // console.log(dogs)
        .then(function(response) {
            return response.json()
            // console.log(dogsResponse)
        })
        .then(function(data) {
            // console.log(data)    
            // console.log(data.message)
            for (const breed in data.message) {
                // console.log(`${breed}: ${data.message[breed]}`) 
                const li = document.createElement("li")
                li.innerText = breed
                dogBreedsList.appendChild(li)
            }
    
        })
        .catch(function(error) {
            console.log(error.message)
        })
    
}

showBreeds()

/*
  Challenge 3:
  1. Once all of the breeds are rendered in the <ul>, add 
     JavaScript so that, when the user clicks on any one 
     of the <li>s, the font color of that <li> changes. This can 
     be a color of your choosing.
*/

dogBreedsList.addEventListener("click", function(event) {
    // alert("LI clicked!!!")
    // console.log(event.target)
    // event.target.style.color = "red"
    for (let j = 0; j < li.length; j++) {
        li[j].classList.remove("text_color")
    }
    event.target.classList.add("text_color")
})

/*
  Challenge 4:
  1. Once we are able to load all of the dog breeds onto 
     the page, add JavaScript so that the user can filter 
     breeds that start with a particular letter using a dropdown.
*/
const breedDropDown = document.getElementById("breed-dropdown")
// console.log(breedDropDown)

breedDropDown.addEventListener("click", function(event) {
    const selectBreed = event.target.value
    for (let j = 0; j < li.length; j++) {
        li[j].classList.remove("list_display")
    }
    // console.log(selectBreed)
    // const string = "affenpinscher"
    // console.log(string.startsWith(selectBreed))
    for (let i = 0; i < li.length; i++) {
        const breedListText = li[i].innerText
        // console.log(string)
        if (!breedListText.startsWith(selectBreed)) {
            // console.log(breedListText)
            // li[i].style.display = "none"
            li[i].classList.add("list_display")
        } 
    }
}) 