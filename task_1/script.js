var todoInput=document.querySelector(".todo-input");
var todoButton=document.querySelector(".todo-button");
var todoList=document.querySelector(".todo-list");

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

function addTodo(e)
{
    e.preventDefault();
    //div
    var todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    //li
    var newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check
    var check=document.createElement('input');
    check.setAttribute('type','checkbox');
    check.classList.add('check');
    todoDiv.appendChild(check);

    //delete button
    var deleteButton=document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML='delete';
    todoDiv.appendChild(deleteButton);

    //add todoList
    todoList.appendChild(todoDiv);

    //delete list
    todoInput.value="";
}

function deleteCheck(e){
    var item=e.target;
    console.log(item);
    console.log(item.classList[0]);
    
    //delete
    if(item.classList[0]==='delete-btn')
    {      
        var todo=item.parentElement;
        todo.remove();
    }

    if(item.classList[0]='check')
    {
        var todo=item.previousElementSibling;
        todo.classList.add('forCheck');        
    }
}


