
//import { ContextExclusionPlugin } from "webpack"
import beach from "./beach.jpeg"

const openingHoursData = [
    {
    day: "Monday",
    opening: false,
    closing: false,
    },
    {
    day: "Tuesday",
    opening: "4 pm",
    closing: "2 am"
    },
    {
    day: "Wednesday",
    opening: "4 pm",
    closing: "2 am"
    },
    {
    day: "Thursday",
    opening: "12 am",
    closing: "11 pm"
    },
    {
    day: "Friday",
    opening: "12 am",
    closing: "2 am"
    },
    {
    day: "Saturday",
    opening: "10 am",
    closing: "2 am"
    },
    {
    day: "Sunday",
    opening: "12 am",
    closing: "12 pm"
    },
]

export default function container() {
    const container = document.createElement("div")
    container.id = "container"

    const title = document.createElement("h1")
    const img = new Image()
    const description = document.createElement("p")
    const openingHours = document.createElement("table")
    const openingHoursTitle = document.createElement("h2")

    title.id = "title"
    title.innerText =  "Carribean Shack"
    
    //img.id = "main-img"
    //img.src = redDoor
    //img.alt = "A pocture of the restaurant. A house with a red door"
    
    description.id = "description"
    description.innerText = `Come lime with us in our beach front ${title.innerText}. There is a curry for everyone and you will find yours here. We offer authentic carribean meals with made with  fresh ingredients, love, and spices that will blow your mind. Why dont you come join us now?`

    openingHoursData.forEach(day => {
        let tr = document.createElement("tr")
        let tdDay = document.createElement("td")
        let tdOpening = document.createElement("td")
        let tdClosing = document.createElement("td")
        tdDay.innerText = day.day 
        tdOpening.innerText = day.opening ? day.opening : "Closed"
        tdClosing.innerText = day.closing ? day.closing:  ""
        tr.append(tdDay, tdOpening, tdClosing)
        openingHours.appendChild(tr)
    });

    const  map = document.createElement("iframe")
    map.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15683.513478692286!2d-61.54154189182264!3d10.666547987758896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3608154b1c8e17%3A0x29698c0895fb81b4!2sThe%20Naughty%20Grape!5e0!3m2!1sen!2sno!4v1632506037507!5m2!1sen!2sno" 
    map.id = "map"
     map.style="border:0;" 
    map.loading="lazy"
    container.append(title, img, description, openingHours, map)
  

    return container
}