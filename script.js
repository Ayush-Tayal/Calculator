const buttons = document.querySelectorAll(".uinput");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const backspace = document.querySelector(".backspace");
// console.log(backspace)
// console.log(equal)
// console.log(buttons, input);

const updateInput = (e)=>{
    input.value += e.target.innerText;
}

buttons.forEach(fun=>{
    fun.addEventListener("click", updateInput)
})

clear.addEventListener("click", ()=>input.value="");

equal.addEventListener("click", ()=>{
    const ans = input.value.replace("^", "**");
    input.value =  input.value + " = " + eval(ans);     
})

backspace.addEventListener("click", ()=>{
    input.value = input.value.slice(0, length-1);
})

