var maindiv = document.getElementById("inputbox");
var div2 = document.getElementById("todos");
let temdata=localStorage.getItem("todos")
let datas=(!!temdata?JSON.parse(temdata):[])
let todos=[]
let editindex;


function Addtodos(){
let checkval=document.querySelector('input').value
if(checkval=="")
{
    alert("Please Enter Some Text")
}
else if(btn.innerText=='Update'){
 todos[editindex]=checkval
 displaytodos()
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
           <div class="todosdiv ">
              <span>${index+1}:${e} </span>
              <button onclick="Edit(${index})" class="btn btn-success">Edit...</button>
              <button onclick="Delete(${index})" class="btn btn-danger">Delete</button> 
            </div>`;
        }
    )
    div2.innerHTML=list

}
displaytodos()
let btn=document.getElementById('btn')

const Edit=(index)=>{
    editindex=index;
    btn.innerText='Update'
    document.querySelector('input').value=todos[index]
    displaytodos()
}
const Delete=(index)=>{
    todos.splice(index,1)
    displaytodos()
}

