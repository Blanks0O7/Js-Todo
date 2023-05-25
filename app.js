let expression = "";

var todoAdd = 1;

function addTodo(){
    var todoTxt = document.getElementById("todo-writer").value;
    if(todoTxt != ""){
    
        var todoField = document.createElement("button");
        todoField.className = "unclickable-btn";
        todoField.value += todoAdd ;
        todoField.textContent = todoTxt;

        todoAdd ++;
        var doneDiv = document.createElement("div");
        doneDiv.className = "operation"

        var deleteField = document.createElement("button");
        deleteField.className = "done-btn";
        deleteField.textContent = "✔"
        deleteField.value = "Done";
        deleteField.onclick = function(){todoContainerPos.removeChild(doneDiv)};
        

        doneDiv.appendChild(todoField);
        doneDiv.appendChild(deleteField);

        

        var todoContainerPos = document.getElementById("flex-container");
        
        todoContainerPos.appendChild(doneDiv);
        
        
    }
    document.getElementById("todo-writer").value = "";
    
}
