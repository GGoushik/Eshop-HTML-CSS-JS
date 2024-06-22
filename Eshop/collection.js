var productcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("Keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.clientHeight;count=count+1)
        {
            var productname = productlist[count].querySelector("p").textContent

            if(productname.toUpperCase().indexOf(enteredvalue)<0){
                productlist[count].style.display="none"
            }
            else{
                productlist[count].style.display="block"
            }
        }
})