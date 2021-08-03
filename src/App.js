import TodoTemplate from "./components/TodoTemplate"
import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"
import {useState,useRef,useCallback} from 'react';

const App = () => {
  //todos 상태(useState) 사용하기
  //배열안에 [], 객체{}넣는데, key는 id,text,checked줌.
  const [todos, setTodos] = useState(
    [{id:1, text:'jogging for 30mins',checked:true}
    ,{id:2, text:'giving a call to Alex',checked:true},
    {id:3, text:'pick up some milk',checked:false}
  ]) //이제 이걸 TodoList의 prop로 전달

  //useRef 훅 사용해 id관리
  const nextId = useRef(4)

  //todos 배열에 새 객체 추가하는 함수만듦
  const onInsert = useCallback(
     text => {
      {/*todo는 이어붙일 새 배열임. */}
      const todo = {
        id:nextId.current, text, checked:false
      } 
      {/*concat으로 배열 이어붙이기*/}
      setTodos(todos.concat(todo));
      nextId.current+=1;
    },
    [todos],
  )
    
    //filter로 id항목을 todos 배열에서 지우는 함수
    const onRemove = useCallback(
      id => {
        setTodos(todos.filter(todo => todo.id !== id))
      },
      [todos],
    )

    const onToggle = useCallback(
      id => {     
        setTodos(todos.map(todo => todo.id === id? {...todo,checked: !todo.checked}:todo,
          ),);
      },
      [todos],
    );
  return (
    <div>
      {/*TodoTemplate 태그 가운데가 children */}
      <TodoTemplate>  
        {/*TodoInsert에 prop로 onInsert함수 들어감 */}
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    </div>

  )
}

export default App