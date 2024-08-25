const click = document.getElementById("click");
const dbclick = document.getElementById("dbclick");
const mouseover = document.getElementById("mouseover");
const mouseout = document.getElementById("mouseout");
const contextmenu = document.getElementById("contextmenu");
const mouseenter = document.getElementById("mouseenter");
const mouseleave = document.getElementById("mouseleave");
const mousedown = document.getElementById("mousedown");
const mouseup = document.getElementById("mouseup");

click.addEventListener("click", () =>{
    alert("CLICK");
})

dbclick.addEventListener("dblclick", () =>{
    alert("DOBLE CLICK");
})

mouseover.addEventListener("mouseover", () =>{
    alert("MOUSEOVER");
})

mouseout.addEventListener("mouseout", ()=>{
    alert("MOUSEOUT");
})

contextmenu.addEventListener("contextmenu", ()=>{
    alert("CONTEXTMENU");
})

mouseenter.addEventListener("mouseenter", ()=>{
    alert("MOUSEENTER");
});

mouseleave.addEventListener("mouseleave", ()=>{
    alert("MOUSELEAVE");
});

mousedown.addEventListener("mousedown", ()=>{
    alert("MOUSEDOWN");
})

mouseup.addEventListener("mouseup", ()=>{
    alert("MOUSEUP");
})



