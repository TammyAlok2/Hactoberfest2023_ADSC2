const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeAvtiveClasses()
        panel.classList.add('active')
    })
})

function removeAvtiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}