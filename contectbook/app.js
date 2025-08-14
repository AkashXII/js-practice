let contacts={}
const paste=document.getElementById("paste")
function search(){
    const input=document.getElementById("input")
    const name=input.value.trim()
    if(!name){
        alert("enter a valid name")
        return
    }
    if(name in contacts){
        paste.innerHTML=`<p>"<p><strong>Name:</strong> ${name}</p>
            <p><strong>Number:</strong> ${contacts[name].number}</p>
            <p><strong>Address:</strong> ${contacts[name].address}</p>"</p>`
        input.value=""
    }
    else{
        alert("contact does not exist")
    }
}
function add(){
    const input1=document.getElementById("name")
    const input2=document.getElementById("number")
    const input3=document.getElementById("address")
    const name=input1.value.trim()
    const number=input2.value.trim()
    const address=input3.value.trim()
    if(!name || !number || !address){
        alert("enter full details")
        return
    }
    if(name in contacts){
        alert("contact already exists")
    }
    else{
        contacts[name]={
            number:number,
            address:address
        }
        input1.value=""
        input2.value=""
        input3.value=""
        alert("contact added")
    }
}