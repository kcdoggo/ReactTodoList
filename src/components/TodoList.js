import TodoListItem from "./TodoListItem";

//TodoListItem -> TodoList -> App
//App에서 todos 객체를 prop으로 줌. 비구조화할당(props키워드없이)으로 패러미터 받아옴
const TodoList = ({todos, onRemove, onToggle}) => {

    return(
        <div className="TodoList">
            {/*todos 객체를 이용해, TodolistItem을 map으로 돔,,
             주의사항!map사용시, key값 반드시 줘야함.
            그리고 TodoListItem에 prop전달 */}
            {todos.map(todo=>(<TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>))}

        </div>

    )
}

export default TodoList;