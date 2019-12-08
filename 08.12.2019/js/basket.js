let products=JSON.parse(localStorage.getItem("basket"));
let count=1;
for(let product of products){
    console.log(product)
    let tdN=document.createElement("td");
    let tdImage=document.createElement("td");
    let tdName=document.createElement("td");
    let tdCount=document.createElement("td");

    tdN.innerText=count;
    count++;

    let img=document.createElement("img");
    img.setAttribute("src",product.Src);
    tdImage.append(img);

    tdName.innerText=product.Name;
    tdCount.innerText=product.Count;

    let tr=document.createElement("tr");
    tr.append(tdN,tdImage,tdName,tdCount);

    document.querySelector(".table").lastElementChild.append(tr);
}