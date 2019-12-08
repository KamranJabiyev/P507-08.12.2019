let btn=document.querySelector(".btn-success")
let prayerList=document.querySelector(".prayerList");

btn.onclick=function(){
    prayerList.innerHTML="";
    let month=document.getElementById("month").value;
    let year=document.getElementById("year").value;
    let http= new XMLHttpRequest();
    url=`http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=${month}&year=${year}`;
    http.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            let response=JSON.parse(this.responseText)
            for(let day of response.data){
                let ul=document.createElement("ul");
                for(let prayer in day.timings ){
                    let li=document.createElement("li");
                    li.innerText=prayer+" : "+day.timings[prayer];
                    ul.append(li);
                }
                let card_body=document.createElement("div");
                card_body.className="card-body";
                card_body.append(ul);

                let h5=document.createElement("h5");
                h5.className="card-header";
                h5.innerText=day.date.readable;

                let card=document.createElement("div");
                card.className="card";
                card.append(h5,card_body);

                let col=document.createElement("div");
                col.className="col-3 mt-3";
                col.append(card);

                prayerList.append(col);
            }

        }
    }
    http.open("GET", url)
    http.send()
}