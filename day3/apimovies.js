
const div=document.querySelector(".container")
const btn=document.querySelector(".btn")
const tr=document.querySelector("#tr")
const table=document.querySelector("#tab")
btn.addEventListener("click", handleClick);
function handleClick(){
        fetch('https://p-9x7e.onrender.com/products/products').then(respose=>respose.json()).then(res =>{
        console.log(res.data);
        for(let i=0; i<res.data.length;i++){
           const tr=document.createElement('tr')
           const td1=document.createElement('td')
           const td2=document.createElement('td')
           const td3=document.createElement('td')
           const td4=document.createElement('td')
           const td5=document.createElement('td')
           td1.innerText=res.data[i]._id;
           td2.innerText=res.data[i]._pName;
           td3.innerText=res.data[i]._Description;
           td4.innerText=res.data[i]._price;
           td5.innerText=res.data[i]._Image;
           tr.append(td1,td2,td3,td4,td5);
           table.append(tr);
           
           
        }
    })
}