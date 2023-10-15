
let displayIntro = document.querySelector(".intro")
let displayOutro = document.querySelector(".outro")


document.querySelector(".intro").onclick = ()=>{
    displayIntro.style.display = "none"
    playAudio()

}

function updateOutro() {
    document.querySelector(".totalClicks-span").innerHTML = totalClicks
    document.querySelector(".totalDiamonds-span").innerHTML = parseFloat(diamond.textContent) + totalSpend
    document.querySelector(".totalSpend-span").innerHTML = totalSpend
    cps=0
}

document.querySelector(".outro").onclick = ()=>{
    resetGame()

}


function addEffects() {
    if (parseFloat(diamond.innerHTML) >= parseFloat(pickaxeCost.innerHTML)) {

        document.querySelector(".pickaxe-upgrade").classList.remove("btn-red") 
        document.querySelector(".pickaxe-upgrade").classList.add("btn-green") 
    }
    else{
        document.querySelector(".pickaxe-upgrade").classList.remove("btn-green") 
        document.querySelector(".pickaxe-upgrade").classList.add("btn-red")

    }

    if (parseFloat(diamond.innerHTML) >= parseFloat(minerCost.innerHTML)) {

        document.querySelector(".miner-upgrade").classList.remove("btn-red") 
        document.querySelector(".miner-upgrade").classList.add("btn-green") 
    }
    else{
        document.querySelector(".miner-upgrade").classList.remove("btn-green") 
        document.querySelector(".miner-upgrade").classList.add("btn-red")

    }

    if (parseFloat(diamond.innerHTML) >= parseFloat(minesCost.innerHTML)) {

        document.querySelector(".mines-upgrade").classList.remove("btn-red") 
        document.querySelector(".mines-upgrade").classList.add("btn-green") 
    }
    else{
        document.querySelector(".mines-upgrade").classList.remove("btn-green") 
        document.querySelector(".mines-upgrade").classList.add("btn-red")

    }
}







let diamond = document.querySelector(".diamond-count")
let CPScount = document.querySelector(".cps-span")

let x =1
let n = 0
let n2 = 0
let cps = 0
let count = 0

let totalClicks = 0
let totalSpend = 0




setInterval(()=>{
    if (totalClicks>0) {
        displayIntro.style.display = "none"
    }
    if (document.querySelector(".pickaxe-upgrade-cost-amount").textContent === "Unavalable" &&
        document.querySelector(".miner-upgrade-cost-amount").textContent === "Unavalable" &&
        document.querySelector(".mines-upgrade-cost-amount").textContent === "Unavalable" &&
        parseFloat(diamond.textContent) > 999999999999 ){
            updateOutro()
            displayOutro.style.display = "block"
            console.log("end")
        }
    addEffects()
},10)




// To increase no of diamonds

function incrementDiamond(x){
    diamond.innerHTML = parseFloat(diamond.innerHTML) + x
    
    
}


setInterval(() => {
    CPScount.innerHTML = cps+count*x
    count = 0;



},1000)



// let audio = 

function playAudio() {
    new Audio("assets/mouse-clicks-6849_pYBi0fH6.mp3").play();
  }

document.querySelector(".diamond-img").onclick = () => {
    incrementDiamond(x);
    manualClickDisplay(event)
    count++
    totalClicks++
    playAudio()
    

}


function fadeout (element, duration, finalOpacity,callback) {

    let opacity = 1;

    let elementFadingInterval = window.setInterval(() => {
        opacity -= 50/duration

        if(opacity<=finalOpacity){
            clearInterval(elementFadingInterval)
            callback()
        }

        element.style.opacity = opacity
    
    },50);




    
}

function randomNumber(min,max){
    return Math.round(Math.random() * (max-min) + min)
}

function manualClickDisplay(event) {
    let manualClicks = document.querySelector(".diamond-img")

    // creation manualNumber element
    let manualClickElement = document.createElement("div");
    manualClickElement.textContent = "+" + Number(x)
    manualClickElement.classList.add("manualNumber","unselectable")
    manualClicks.appendChild(manualClickElement)

    // getting position of mouse click
    let clickeroffset = manualClicks.getBoundingClientRect()
    let position = {
        x: event.pageX - clickeroffset.left + randomNumber(-7,7),
        y: event.pageY - clickeroffset.top
    }

    // setting position of manualCLickElement 

    manualClickElement.style.left = position.x + "px"
    manualClickElement.style.top = position.y + "px"

    // making element slowly rise up
    let movementInterval = window.setInterval(()=>{
        if(typeof manualClickElement == "undefined" && manualClickElement == null){
            clearInterval(movementInterval)
        }
        position.y--
        manualClickElement.style.top = position.y +"px"
    })

    // document.querySelector(".manualNumber").style.fontSize = (10/x) + "vw"

    // adding fadingout function
    fadeout(manualClickElement,1500,0.5,()=>{
        manualClickElement.remove()
    })




}



function autoClickDisplay(event) {
    if(cps > 0){
    let autoClicks = document.querySelector(".diamond-img")
    let autoClickElement = document.createElement("div");
    autoClickElement.textContent = "+" + Number(cps)
    autoClickElement.classList.add("autoNumber","unselectable")
    autoClicks.appendChild(autoClickElement)


    
    let y = window.getComputedStyle(document.querySelector(".autoNumber")).top
    y = y.substring(0,y.length-2)
    


    let movementInterval = window.setInterval(()=>{
        if(typeof autoClickElement == "undefined" && autoClickElement == null){
            clearInterval(movementInterval)
        }
        y--
        autoClickElement.style.top = y+"px"
    })





    // adding fadingout function
    fadeout(autoClickElement,1500,0.5,()=>{
        autoClickElement.remove()
    })
    
    }

    

    


    

    

}

// For pickaxe Upgrade

let pickaxeCost = document.querySelector(".pickaxe-cost")
let pickaxeLevel = document.querySelector(".pickaxe-level")
let clickIncrease = document.querySelector(".click-increase")

let buyPickaxe = () => {
    if (parseFloat(diamond.innerHTML) >= parseFloat(pickaxeCost.innerHTML) && parseFloat(pickaxeLevel.innerHTML)<30) {
        diamond.innerHTML = parseFloat(diamond.innerHTML) - parseFloat(pickaxeCost.innerHTML)
        totalSpend += parseFloat(pickaxeCost.innerHTML)
        pickaxeLevel.innerHTML = parseFloat(pickaxeLevel.innerHTML) +1;
        x = Math.pow(2,n+1)*n3;
        n++;
        clickIncrease.innerHTML = x*2
        pickaxeCost.innerHTML = parseFloat(pickaxeCost.innerHTML) + Math.floor(Math.pow(2.1,n+2))*10
        changePickaxeScr();
        if(parseFloat(pickaxeLevel.innerHTML)==30){
            pickaxeLevel.innerHTML = "Max";
            document.querySelector(".pickaxe-upgrade-cost-amount").innerHTML = "Unavalable"
                
        }
    }
}




function changePickaxeScr() {
    switch (true) {
        case parseFloat(pickaxeLevel.innerHTML)<3:
            document.querySelector(".pickaxe-icon").src ="./assets/pickaxes/fist.png"
          break;
        case parseFloat(pickaxeLevel.innerHTML)<6:
            document.querySelector(".pickaxe-icon").src ="./assets/pickaxes/stick.png"
          break;
        case parseFloat(pickaxeLevel.innerHTML)<9:
            document.querySelector(".pickaxe-icon").src = "./assets/pickaxes/Bronze_Pickaxe_m.png"
          break;
        case parseFloat(pickaxeLevel.innerHTML)<12:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Steel_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<15:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Ancient_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<18:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Mythan_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<21:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Crimsteel_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<24:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Cobalt_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<27:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Varaxite_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<30:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Magic_Pickaxe_m.png"
            break;
        case parseFloat(pickaxeLevel.innerHTML)<33:
            document.querySelector(".pickaxe-icon").src = "assets/pickaxes/Umbral_Pickaxe_m.png"
            break;
    }
      }

document.querySelector(".pickaxe-upgrade").onclick = () => {
    buyPickaxe() 
    playAudio()
}




// For miner Upgrade

let minerCost = document.querySelector(".miner-cost")
let minerLevel = document.querySelector(".miner-level")
let cpsIncrease = document.querySelector(".cps-increase")

let buyMiner = () => {
    if (parseFloat(diamond.innerHTML) >= parseFloat(minerCost.innerHTML) && parseFloat(minerLevel.innerHTML)<20) {
        diamond.innerHTML = parseFloat(diamond.innerHTML) - parseFloat(minerCost.innerHTML)
        totalSpend += parseFloat(minerCost.innerHTML)
        minerLevel.innerHTML = parseFloat(minerLevel.innerHTML) + 1;
        n2++;
        cps = parseFloat(cpsIncrease.innerHTML);
        cpsIncrease.innerHTML = parseFloat(cpsIncrease.innerHTML)*n3+Math.floor(Math.pow(1.5,n2+1))
        minerCost.innerHTML = parseFloat(minerCost.innerHTML) + Math.floor(Math.pow(3.6,n2+2))*10
        changeMinerScr();
        if(parseFloat(minerLevel.innerHTML)==20){
            minerLevel.innerHTML = "Max";
            document.querySelector(".miner-upgrade-cost-amount").innerHTML = "Unavalable"
            
        }

    }
}


function changeMinerScr() {
    switch (true) {
        case parseFloat(minerLevel.innerHTML)<2:
            document.querySelector(".miner-icon").src ="./assets/miners/onlyMiner.png"
          break;
        case parseFloat(minerLevel.innerHTML)<4:
            document.querySelector(".miner-icon").src ="./assets/miners/stickMiner.png"
          break;
        case parseFloat(minerLevel.innerHTML)<6:
            document.querySelector(".miner-icon").src ="./assets/miners/copperMiner.png"
          break;
        case parseFloat(minerLevel.innerHTML)<8:
            document.querySelector(".miner-icon").src = "./assets/miners/ironMiner.png"
            break;
        case parseFloat(minerLevel.innerHTML)<10:
            document.querySelector(".miner-icon").src = "./assets/miners/goldMiner.png"
            break;
        case parseFloat(minerLevel.innerHTML)<12:
            document.querySelector(".miner-icon").src = "./assets/miners/blueMiner.png"
            break;
        case parseFloat(minerLevel.innerHTML)<14:
            document.querySelector(".miner-icon").src = "./assets/miners/redMiner.png"
            break;
        case parseFloat(minerLevel.innerHTML)<16:
            document.querySelector(".miner-icon").src = "./assets/miners/violetMiner.png"
            break;
        case parseFloat(minerLevel.innerHTML)<18:
            document.querySelector(".miner-icon").src = "./assets/miners/greenMiner.png"
            break;
        case parseFloat(minerLevel.innerHTML)<20:
            document.querySelector(".miner-icon").src = "./assets/miners/purpleMiner.png"
            break;
        case parseFloat(minerLevel.innerHTML)<22:
            document.querySelector(".miner-icon").src = "./assets/miners/blackMiner.png"
            break;
    }
      }

document.querySelector(".miner-upgrade").onclick = () => {
    buyMiner() 
    playAudio()
}

setInterval(() => {
    incrementDiamond(cps)
    autoClickDisplay(event)
},1000)





let minesCost = document.querySelector(".mines-cost")
let minesLevel = document.querySelector(".mines-level")
let minesIncrease = document.querySelector(".mines-increase")
let n3 = 1

let buyMines = () => {
    if (parseFloat(diamond.innerHTML) >= parseFloat(minesCost.innerHTML) && parseFloat(minesLevel.innerHTML)<10) {
        diamond.innerHTML = parseFloat(diamond.innerHTML) - parseFloat(minesCost.innerHTML)
        totalSpend += parseFloat(minesCost.innerHTML)
        minesLevel.innerHTML = parseFloat(minesLevel.innerHTML) +1;
        n3++
        n++
        minesIncrease.innerHTML = n3+1
        minesCost.innerHTML = parseFloat(minesCost.innerHTML) + Math.floor(Math.pow(4.5,n3+3))*10
        x = x*n3
        clickIncrease.innerHTML = x*2
        cps = parseFloat(cpsIncrease.innerHTML);
        cpsIncrease.innerHTML = parseFloat(cpsIncrease.innerHTML)*n3

        // changeMinesScr();
        if(parseFloat(minesLevel.innerHTML)==10){
            minesLevel.innerHTML = "Max";
            document.querySelector(".mines-upgrade-cost-amount").innerHTML = "Unavalable"
                
        }
    }
}


document.querySelector(".mines-upgrade").onclick = () => {
    buyMines() 
    playAudio()
}





    // trying to create a click per second counter
// function countclick(cps) {
//     var x1 = 0
//     let sum = 0

//     document.getElementById("diamond").onclick = () => {
//         return x1++
//     }
//     console.log(x1)

// }
// setInterval(() => {countclick(cps)},5000)


// Saving and loading data (local storage)

function saveGame() {
    let gameSave = {
        diamondValue: parseFloat(diamond.innerHTML),
        CPScountValue: parseFloat(CPScount.innerHTML),
        xValue: x,
        nValue:n,
        cpsValue:cps,
        totalClicksValue:totalClicks,
        totalSpendValue:totalSpend,


        // saving pickaxe upgrade data

        pickaxeCostValue:parseFloat(pickaxeCost.innerHTML),
        pickaxeLevelValue:parseFloat(pickaxeLevel.innerHTML),
        clickIncreaseValue:parseFloat(clickIncrease.innerHTML),
        pickaxeImageSrc : document.querySelector(".pickaxe-icon").src,

        // saving miner upgrade data

        n2Value:n2,
        minerCostValue:parseFloat(minerCost.innerHTML),
        minerLevelValue:parseFloat(minerLevel.innerHTML),
        cpsIncreaseValue:parseFloat(cpsIncrease.innerHTML),
        minerImageSrc : document.querySelector(".miner-icon").src,

        n3Value:n3,
        minesCostValue:parseFloat(minesCost.innerHTML),
        minesLevelValue:parseFloat(minesLevel.innerHTML),
        minesIncreaseValue:parseFloat(minesIncrease.innerHTML),
        minesImageSrc : document.querySelector(".mines-icon").src,




    }
    localStorage.setItem("gameSave",JSON.stringify(gameSave))
}

setInterval(() => {
    saveGame();
},10000)

function loadGame(){
    let savedGame = JSON.parse(localStorage.getItem("gameSave"))

    if (typeof savedGame.diamondValue !== "undefined") {
        diamond.innerHTML = savedGame.diamondValue;
    }
    if (typeof savedGame.CPScountValue !== "undefined") {
        CPScount.innerHTML = savedGame.CPScountValue;
    }
    if (typeof savedGame.cpsValue !== "undefined") {
        cps = savedGame.cpsValue;
    }
    if (typeof savedGame.xValue !== "undefined") {
        x = savedGame.xValue;
    }
    if (typeof savedGame.nValue !== "undefined") {
        n = savedGame.nValue;
    }
    if (typeof savedGame.totalClicksValue !== "undefined") {
        totalClicks = savedGame.totalClicksValue;
    }
    if (typeof savedGame.totalSpendValue !== "undefined") {
        totalSpend = savedGame.totalSpendValue;
    }
    


    // loading pickaxe upgrade data

    if (typeof savedGame.pickaxeCostValue !== "undefined") {
        pickaxeCost.innerHTML = savedGame.pickaxeCostValue;
    }
    if (typeof savedGame.pickaxeLevelValue !== "undefined") {
        pickaxeLevel.innerHTML = savedGame.pickaxeLevelValue;
    }
    if (typeof savedGame.clickIncreaseValue !== "undefined") {
        clickIncrease.innerHTML = savedGame.clickIncreaseValue;
    }
    if (typeof savedGame.pickaxeImageSrc !== "undefined") {
        document.querySelector(".pickaxe-icon").src = savedGame.pickaxeImageSrc;
    }


    // loading miner upgrade data


    if (typeof savedGame.n2Value !== "undefined") {
        n2 = savedGame.n2Value;
    }
    if (typeof savedGame.minerCostValue !== "undefined") {
        minerCost.innerHTML = savedGame.minerCostValue;
    }
    if (typeof savedGame.minerLevelValue !== "undefined") {
        minerLevel.innerHTML = savedGame.minerLevelValue;
    }
    if (typeof savedGame.cpsIncreaseValue !== "undefined") {
        cpsIncrease.innerHTML = savedGame.cpsIncreaseValue;
    }
    if (typeof savedGame.minerImageSrc !== "undefined") {
        document.querySelector(".miner-icon").src = savedGame.minerImageSrc;
    }

    

    if (typeof savedGame.n3Value !== "undefined") {
        n3 = savedGame.n3Value;
    }
    if (typeof savedGame.minesCostValue !== "undefined") {
        minesCost.innerHTML = savedGame.minesCostValue;
    }
    if (typeof savedGame.minesLevelValue !== "undefined") {
        minesLevel.innerHTML = savedGame.minesLevelValue;
    }
    if (typeof savedGame.minesIncreaseValue !== "undefined") {
        minesIncrease.innerHTML = savedGame.minesIncreaseValue;
    }
    if (typeof savedGame.minesImageSrc !== "undefined") {
        document.querySelector(".mines-icon").src = savedGame.minesImageSrc;
    }
}

// loading data of refresh
window.onload = () => {
    loadGame()
}

// save data on ctrl + s
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.which==83){
        event.preventDefault()
        saveGame()
    }
},false)

function resetGame() {
    playAudio()
    if(confirm("Do you want to reset the game ?")){
        let gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload(); 
    }

}

document.querySelector(".reset").onclick = ()=>{
    playAudio()
    resetGame()
}
