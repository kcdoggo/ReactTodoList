//조건부 스타일링 classname이용, 만약 완료했다면 취소선 그어지고 
import cn from 'classnames';

// 빈 체크박스, 체크된 체크박스, 삭제아이콘,
import { MdCheckBox,MdCheckBoxOutlineBlank,MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';

//구조 : 체크할 빈박스 -> 텍스트 ->삭제아이콘
//구조 만든 후, TodoList에 불러올거임.
//TodoList에서 prop보내옴,(비구조화문법이라 props키워드없음)
const TodoListItem = ({todo,onRemove, onToggle}) =>{

    //todo.text, todo.checked를 생략하기 위해
    const {id,text,checked} = todo;

    return(
    
    <div className="TodoListItem">
    {/*classname조건부스타일링, className인cn은 checkbox이름 가졌고
    이걸 text까지 감쌈, checked 키에 */}
            <div className={cn('checkbox',{checked})} onClick={()=>onToggle(id)}>
            {checked?<MdCheckBox/>: <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
        
        
        <div className="remove" onClick={()=>onRemove(id)}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
    )

}

export default TodoListItem;