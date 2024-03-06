var maindiv = document.getElementById("inputbox");
var div2 = document.getElementById("todos");
let temdata=localStorage.getItem("todos")
let datas=(!!temdata?JSON.parse(temdata):[])

console.log(maindiv.value)

let todos=[]


function Addtodos(){
let checkval=document.querySelector('input').value
if(checkval=="")
{
    alert("Please Enter Some Text")
}
else{
    todos.push(checkval)
    document.querySelector('input').value=""
    localStorage.setItem("todos",JSON.stringify(todos))
    displaytodos()
}
   
}


const displaytodos=()=>{
    let list=''
    todos.forEach(
        (e,index)=>{
            
           list+=`
           <div class="paradiv">
              <p>${index+1}:${e} </p>
              <button onclick="Edit(${index})" class="btn btn-edit">Edit</button>
              <button onclick="Delete(${index})" class="btn btn-delete">Delete</button> 
            </div>`;
        }
    )
    div2.innerHTML=list

}
displaytodos()

const Edit=(index)=>{
    document.querySelector('input').value=todos[index]
    displaytodos()
}
const Delete=(index)=>{
    todos.splice(index,1)
    displaytodos()
}

