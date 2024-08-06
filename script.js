

let dropdown = document.querySelectorAll("select")
let convAmt = document.querySelector(".convAmt")


document.querySelector("button").addEventListener(("click") ,async (evt) => {
    let input = evt.target.parentElement.querySelector("input");
    let inpValue = input.value;

    let fromCode = dropdown[0].value;
    let toCode = dropdown[1].value;
    let excRate = await exchangeRateAPI(fromCode,toCode)
    let chAmt = inpValue*excRate;
    convAmt.innerHTML = `${inpValue} ${fromCode} = ${chAmt} ${toCode}`
})
