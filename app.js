let modal = document.querySelector(".modal")

let bat = document.querySelector (".bat-close")



function openModal(){
    modal.classList.add("show")
    modal.classList.remove("hidden")
    }

 function closeModal(){
    modal.classList.add("hidden")
    modal.classList.remove("show")
    }
    bat.addEventListener("click",closeModal)

    modal.addEventListener("click",function(e){
        if(e.target===modal){
            closeModal()
        }
    })

    

    function showModalByScroll(){
          if (window.pageYOffset > document.body.scrollHeight/2){
          openModal()
        window.removeEventListener("scroll",showModalByScroll)
}
}
    window.addEventListener("scroll",showModalByScroll)






let mobileMenu = document.querySelector(".nav-mobile-menu")
let mainMenu = document.querySelector(".navigation")

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu")
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu")
    }else{
        mainMenu.classList.remove("active-menu")
    }
})


