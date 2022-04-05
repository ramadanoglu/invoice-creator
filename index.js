//Services Array
let services = []
let prices = []
//Service buttons
const washCarBtn = document.getElementById("wash-car-button")
const mowLawnBtn = document.getElementById("mow-lawn-button")
const pullWeedsBtn = document.getElementById("pull-weeds-button")
const ulEl = document.getElementById("services")
const servicesFromLocalStorage = JSON.parse( localStorage.getItem("services"))
const pricesFromLocalStorage = JSON.parse( localStorage.getItem("prices"))
const sendBtn = document.getElementById("send-btn")
const removeBtn = document.getElementById("remove-btn")

let totalCost = document.getElementById("total-cost")

if (servicesFromLocalStorage && pricesFromLocalStorage) {
        services = servicesFromLocalStorage
        prices = pricesFromLocalStorage
        // render(services, prices)
    }
washCarBtn.addEventListener("click", function(){
    if (services[0] != "Wash Car") {
        services.push("Wash Car")
        prices.push(10)
        localStorage.setItem("services", JSON.stringify(services))
        localStorage.setItem("prices", JSON.stringify(prices))
        render(services, prices)
    } 
})
mowLawnBtn.addEventListener("click", function(){
    if (services[1] != "Mow Lawn") {
        services.push("Mow Lawn")
        prices.push(20)
        localStorage.setItem("services", JSON.stringify(services))
        localStorage.setItem("prices", JSON.stringify(prices))
        render(services, prices)
    }
})
pullWeedsBtn.addEventListener("click", function(){
    if (services[2] != "Pull Weeds") {
        services.push("Pull Weeds")
        prices.push(30)
        localStorage.setItem("services", JSON.stringify(services))
        localStorage.setItem("prices", JSON.stringify(prices))
        render(services, prices)
    }
})
function render(services, prices) {
    let listItems = " "
    let fullCost = 0
    for (let i=0; i < services.length; i++) {
        listItems += `
            <li>
                ${services[i]}<button id="remove-btn" class="remove-btn">Remove</button><span class="currency">\$</span><span class="price">${prices[i]}</span>
            </li>
        `
        fullCost += prices[i]   
    }
    ulEl.innerHTML = listItems
    totalCost.innerHTML =  "$" + fullCost
}
sendBtn.addEventListener("click", function() {
    localStorage.clear()
    services = []
    prices = []
    render(services,prices)
})
