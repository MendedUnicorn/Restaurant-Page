import {header} from "./header.js"
import container from "./main.js"
import menu from "./menu.js"
import about from "./about.js"
import "./style.css"

let activeTab = "main"




const content = document.querySelector("#content")
content.appendChild(container())
content.prepend(header())


function addEvent () {
    let btns = document.querySelectorAll(".header") 
    btns.forEach(btn => {
        btn.addEventListener("click", e => {
            switch (e.target.id) {
                case "main":
                    console.log(e.target.id)
                    content.innerText = ""
                    content.append(header(), container())
                    addEvent()
                    break;
                case "menu":
                    console.log(e.target.id)
                    content.innerText = ""
                    content.append(header(), menu())
                    addEvent()
                    break;
                case "about":
                    console.log(e.target.id)
                    content.innerText = ""
                    content.append(header(), about())
                    addEvent()
                    break;
            }
        })
    })
    console.log(btns)
 }

addEvent()