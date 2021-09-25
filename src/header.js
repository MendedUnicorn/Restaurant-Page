
function header() {

    const header = document.createElement("div")
    header.id = "header"
    
    const main = document.createElement("div")
    const menu = document.createElement("div")
    const about = document.createElement("div")
    
    main.id = "main"
    menu.id = "menu"
    about.id  = "about"

    main.classList.add("header")
    menu.classList.add("header")
    about.classList.add("header")
   
    
    main.innerText = "Home"
    menu.innerText = "Menu"
    about.innerText = "About"


    



    header.append(main, menu, about)

    return header

}



 export {header}