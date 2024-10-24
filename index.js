$(document).ready(function(){
    const $form= $('#task-form');
    const $taskInput =$('#cadastro-tarefa');
    const $taskList =$('#task-list');

    $form.on('submit', function(e){
        e.preventDefault();
        const taskText =$taskInput.val().trim();
        if(taskText===''){
            alert('Por favor, adicione uma tarefa!');
            return;
        }
        const $newTask =$('<li></li>').text(taskText);
        $taskList.append($newTask);
        $taskInput.val('');

        $newTask.on('click', function() {
            $(this).css('text-decoration', 'line-through');
            });
    })
})