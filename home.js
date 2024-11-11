search = document.querySelector(".search-icon")
search_in = document.querySelector(".search-input")
search.addEventListener("click",() => {
    if (search_in.innerText == "Farmer" || search_in.innerText == "farmer"){
        location.href = "https://www.google.com"
    }
})