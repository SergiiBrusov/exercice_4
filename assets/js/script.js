// const button = document.getElementById("click")
// function addElement (){
//     const newDiv = document.createElement("div")
//     const paragraph = document.createElement("p")
//     paragraph.innerHTML = "Lorem ipsum"
//     newDiv.innerText = "My name is";
//     document.querySelector("#playground").appendChild(newDiv)
//     addImage(newDiv)
// }
// function addImage (parent){
//         const img = document.createElement("img");
//         img.src = "https://picsum.photos/200/300?image=0"
//        parent.append(img)

// }
// button.addEventListener("click", function (){
//     if(document.body.contains(document.querySelector("#playground div"))){
//         document.querySelector("#playground div").remove();
//     } else{
//     addElement()}
// })

//variables
const playground = document.querySelector("#playground");
const click = document.getElementById("click");
const click1 = document.getElementById("click1")
const popUpArray = [
    {
        titleTxt: "MY NAME IS",
        titleCSS: "myNameIs",
        imgSrc: "https://picsum.photos/300/200?image=0",
        paraTxt: "Lorem ipsum dolor sit humanis Lorem ipsum dolor sit humanisLorem ipsum dolor sit humanis"
    },
    {
        titleTxt: "Hello world!!!",
        titleCSS: "wuTang",
        imgSrc: "https://picsum.photos/seed/picsum/300/200",
        paraTxt: "Lorem ipsum dolor sit humanis Lorem ipsum dolor sit humanisLorem ipsum dolor sit humanis",
        categories: [
            "pubChaussure",
            "vetements"
        ]
    }
]

// console.log(popUpArray[0].paraTxt);
// console.log(popUpArray[1]["categories"][1]);
// fonctions
const popUp = (parent, idName, index) => {
    const div = document.createElement("div");
    div.id = idName;
    // attention style n'est pas la bonne solution privilegiez les class
    div.style.width = "300px"
    parent.append(div);
    //...
    titre(div, popUpArray[index].titleTxt, popUpArray[index].titleCSS);
    image(div, popUpArray[index].imgSrc);
    paragraph(div, popUpArray[index].paraTxt)

}
const titre = (parent, txt, deco) => {
    const h1 = document.createElement("h1");
    h1.classList.add(deco);
    h1.innerText = txt;
    parent.append(h1)
}
const paragraph = (parent, txt) => {
    const p = document.createElement("p");
    p.innerText = txt;
    parent.append(p)
}
const image = (parent, source) => {
    const img = document.createElement("img");
    img.src = source;
    parent.append(img)
}
const removePopup = (idName) => {
    document.getElementById(idName).remove();

}
// popUp(playground, "popUpOne");
click.addEventListener("click", () => {
    const idNameOne = "popUpOne";
    if (document.contains(document.getElementById(idNameOne))) {
        removePopup(idNameOne)
    } else {
        popUp(playground, idNameOne, 0);
    }
})
click1.addEventListener("click", () => {
    const idNameOne = "popUp1";
    if (document.contains(document.getElementById(idNameOne))) {
        removePopup(idNameOne)
    } else {
        popUp(playground, idNameOne, 1);
    }
})
