// localStorage.setItem("x",1);
// if (localStorage.getItem("x") == null) {
//     console.log("Yes")
//     localStorage.setItem("x", 1);
// } else {
//     let count = Number(localStorage.getItem("x"))
//     localStorage.setItem("x", count + 1);
// }

// localStorage.setItem("x",1);
// sessionStorage.setItem("y",1);
if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]));
}


let addBasketAll=document.querySelectorAll(".addBasket");

for(let addBasket of addBasketAll){
    addBasket.onclick=function(e){
        e.preventDefault();
        if(localStorage.getItem("basket")==null){
            localStorage.setItem("basket",JSON.stringify([]));
        }
        let basket=JSON.parse(localStorage.getItem("basket"));
        let name=this.parentElement.firstElementChild.innerText;
        let src=this.parentElement.previousElementSibling.getAttribute("src");
        let data_id=this.parentElement.parentElement.getAttribute("data-id");

        let existingPro=basket.find(p=>p.Id==data_id);

        if(existingPro===undefined){
            basket.push({
                Id:data_id,
                Name:name,
                Src:src,
                Count:1
            })
        }else{
            existingPro.Count+=1;
        }
        localStorage.setItem("basket",JSON.stringify(basket));
        CountBasket();
    }
}

function CountBasket(){
    let basket=JSON.parse(localStorage.getItem("basket"));
    // document.getElementById("ProCount").innerText=basket.length;
    let count=basket.reduce((total,p)=>total+p.Count,0);
    document.getElementById("ProCount").innerText=count;
}

CountBasket();