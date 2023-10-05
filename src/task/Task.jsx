const Task = (props) => {
    const handleDeleteTask = (id) => {
        console.log(id)
    }
    return (
        <div>
          <span className="todo_task">{props.value}Ваша задача</span> 
          <span className="todo__action todo__action_complete"></span>
          <span 
            className="todo__action todo__action_delete" 
            onClick={() => handleDeleteTask(props.id)}>
          </span>
        </div>
    );
  };
  export default Task;