let link = document.createElement("link")
link.rel = "stylesheet"
link.type = "text/css"
link.href = "DOM.css"



let headingDiv = document.createElement("div")
headingDiv.setAttribute("id", "headingDiv")
document.getElementById("container").appendChild(headingDiv)

let containerDiv = document.getElementById("container")
let heading = document.createElement("h1")
document.getElementById("headingDiv").appendChild(heading)
heading.innerHTML = "HighOnCoding"

let homeTab = document.createElement("a")
homeTab.innerHTML = "Home"
document.getElementById("headingDiv").appendChild(homeTab)

let categoriesTab = document.createElement("a")
categoriesTab.innerHTML = "Categories"
document.getElementById("headingDiv").appendChild(categoriesTab)


document.getElementById("headingDiv").style.backgroundColor = "blue"
document.getElementById("headingDiv").style.padding = "10px"
document.getElementById("headingDiv").style.color = "white"

let mainParagraph = document.createElement("p")
document.getElementById("container").appendChild(mainParagraph)

let subHeading = document.createElement("h2")
document.getElementById("container").appendChild(subHeading)
subHeading.innerHTML = "Curse of the Current Reviews"

let secondDiv = document.createElement("div")
secondDiv.setAttribute("id", "secondContainer")
containerDiv.appendChild(secondDiv)

let secondParagraph = document.createElement("p")
secondParagraph.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
document.getElementById("secondContainer").appendChild(secondParagraph)

let socialFeedback = document.createElement("div")
socialFeedback.setAttribute("id", "socialFeed")
containerDiv.appendChild(socialFeedback)

let firstPheading = document.createElement("h3")
firstPheading.innerHTML = "Hello WatchKit"
document.getElementById("secondContainer").appendChild(firstPheading)

let firstParagraph = document.createElement("p")
firstParagraph.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to creat Apple Watch applications. In this article we focus on the basics of getting started with the WatchKit and developing apps for the Apple Watch."
document.getElementById("secondContainer").appendChild(firstParagraph)

let socialFeedLikes = document.createElement("p")
socialFeedLikes.innerHTML = "12 comments    124 likes"
document.getElementById("socialFeed").appendChild(socialFeedLikes)
