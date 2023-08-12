const thing = document.getElementById("thing");
let auxThing = document.getElementById("reactiveElement");
const contentThings = document.getElementById("listThings");


const things = [];

thing.addEventListener("keyup", function() {
    auxThing.textContent = thing.value;

});

function addThing(){
    things.push(thing.value);
    thing.value = "";
    auxThing.textContent = thing.value;
    renderThings();
}


const renderThings = () => {
    const nodes = things.map(x => {
        const node = document.createElement("li");
        const textNode = document.createTextNode(x);
        node.appendChild(textNode);
        return node;
    });
    contentThings.innerHTML = "";
    nodes.forEach(x => contentThings.appendChild(x));
    
}
