const Select = () => {
    return (
        <select className="todo__options">
            <option value="all">все</option>
            <option value="active">активные</option>
            <option value="completed">завершенные</option>
        </select>
    );
  };
  export default Select;