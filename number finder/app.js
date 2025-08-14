const input=document.getElementById("input")
const holder1=document.getElementById("holder1")

const students = {
    "101": {
      name: "Akash",
      class: "10A",
      address: "123 Main St"
    },
    "102": {
      name: "Rafah",
      class: "10B",
      address: "456 Elm St"
    },
    "103": {
      name: "Sanath",
      class: "10C",
      address: "789 Oak St"
    }
  };
  function generate() {
    const id = input.value.trim();
    const studentid = students[id];
  
    if (studentid) {
      holder1.innerHTML = `
        <p><strong>Name:</strong> ${studentid.name}</p>
         <p><strong>Class:</strong> ${studentid.class}</p>
          <p><strong>Address:</strong> ${studentid.address}</p>
      `;
    } else {
      holder1.innerHTML = `<p>No data</p>`;
    }
  }
  function addStudent(){
    const id = document.getElementById("new-id").value.trim();
    const name = document.getElementById("new-name").value.trim();
    const className = document.getElementById("new-class").value.trim();
    const address = document.getElementById("new-address").value.trim();

    if(!id || !name || !className || ! address){
        alert("enter all fields")
        return
    }
    if(students[id]){
        alert("id already exists")
        return
    }
    else{
        students[id]={
            name:name,
            class:className,
            address:address
        }
    }
  }