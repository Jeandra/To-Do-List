document.querySelector('#add').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Adicione uma tarefa")
    }
    else {
    document.querySelector('#tasks').innerHTML += `
    <div class="tasks">
        <label class="taskCheck">
            <input type="checkbox" class="taskCheckbox"></input>
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>           
        </label>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>

        </div>
        `;
        var current_tasks = document.querySelector(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

     }
}