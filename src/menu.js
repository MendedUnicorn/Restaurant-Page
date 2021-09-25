
export default function menu() {

    
    let menuData = [
        {
            name: "Curry Crab",
            price: 5,
            allergens: ["shellfish"] ,
            description: "Delicious crab in curry" ,
            picture: "https://www.thespruceeats.com/thmb/zbZjcFjQlBod7oZ5Rm2wlm9_JJM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-crab-curry-1957735-hero-01-74d33f0b5657459b853a6e8bed66e90f.jpg", 

        },
        {
            name: "Curry Goat",
            price: 10,
            allergens: ["None"],
            description: "Delicious goat in curry",
            picture: "https://119027-339606-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/123243084_1091325287977093_8833300493415125054_o-1171x1300.jpg",
        },
        {
            name: "Curry Chicken",
            price: 7,
            allergens: ["None"],
            description: "Delicious chicken in curry",
            picture: "https://d33wubrfki0l68.cloudfront.net/98c33f0a0d97e02bc1516d3d3fd6fcdce07aabeb/a87f7/img/jan2017/trini_curry_2.jpg",

        },
        {
            name: "Wrapup Roti",
            price: 9,
            allergens: ["Gluten"],
            description: "Paratha is soft and flaky, whereas Dhal Puri is filled with split peas. Both are eaten with either vegetables or curried meats.",
            picture: "https://www.chefspencil.com/wp-content/uploads/Roti.jpg.webp" ,

        },
        {
            name: "Doubles",
            price: 3,
            allergens: ["Gluten", "Sulphides"] ,
            description: "This food is made up of 2 baras (pieces of fried dough), filled with channa (chickpea), topped with various sauces such as pepper sauce, cilantro sauce, tamarind sauce, and coconut chutney, grated cucumber, or kuchela. Or all of the above! ",
            picture: "https://www.chefspencil.com/wp-content/uploads/Doubles-960x720.jpg.webp",

        },
        {
            name: "Bake and Shark",
            price: 15,
            allergens: ["Shellfish", "Eggs", "Lactose", "Gluten"],
            description: "Bake and shark is two pieces of fried dough filled with a fried fillet of shark. However, it’s all about the toppings. ",
            picture: "https://www.chefspencil.com/wp-content/uploads/Bake-and-Shark-960x720.jpg.webp",

        },
        {
            name: "Pelau",
            price: 12,
            allergens: ["Gluten"],
            description: "Pelau is a one-pot dish. It is stewed meat cooked with rice and vegetables. Firstly, the meat is marinated in seasoning and then caramelized in oil and sugar. The meat caramelizes for a while before rice, vegetables, and coconut milk are added to the pot. " ,
            picture: "https://www.chefspencil.com/wp-content/uploads/arwueuchuax-960x539.jpeg.webp" ,
        },
        {
            name: "Pastelles",
            price: 5,
            allergens: ["Gluten", "Eggs"],
            description: "Pastelles are made during the Christmas season. Their roots go back to the Spanish colonizers. This dish is made with cornmeal and stuffed with beef, pork, chicken, or a mix of all. Finally, it is wrapped in banana leaves and steamed. " ,
            picture: "https://www.chefspencil.com/wp-content/uploads/Pastelles-960x720.jpg.webp",

        },
    ]

    const menu = document.createElement("div")
    menu.id = "menuu"
    const title = document.createElement("h2")
    title.id = "title"
    title.innerText = "Menu"
    menu.appendChild(title)


    function createMenuItem(nameOfItem, desc, priceOfItem, pic) {
        let item = document.createElement("div")
        let name = document.createElement("h3")
        let description = document.createElement("p")
        let price = document.createElement("p")
        let picture = new Image()

        item.classList.add("item")
        name.classList.add("name")
        description.classList.add("descrition")
        price.classList.add("price")
        picture.classList.add("picture")

        name.innerText = nameOfItem;
        description.innerText = desc;
        price.innerText = "$" + priceOfItem +".00"
        picture.src = pic
        picture.width = "200"
        picture.height = "200"

        item.append(name, description, price, picture)
        return item
    }
    
    menuData.forEach(item => {
        menu.appendChild(createMenuItem(item.name, item.description, item.price, item.picture))
    })


    return menu
    
}