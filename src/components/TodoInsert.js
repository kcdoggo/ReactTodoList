import { MdAdd } from "react-icons/md";
import './TodoInsert.scss';
import {useState, useCallback} from 'react';

//onInsert함수 prop으로 받아옴.
const TodoInsert = ({onInsert}) => {

    //Input 값을 관리(useState), 치면 그 값을 얻음.
    const [value, setValue] = useState('')

    //input 창에 치면, 그 값을 얻어 value로 설정함
    /*함수정의시, 재사용하게 콜백함수 사용
    (첫번째 패러미터:사용할 함수,두번째: 무엇이 변경됬을때만 함수실행, []면 처음 렌더링할때만 실행) */
    const onChange = useCallback(
        e => {
            setValue(e.target.value)
        },[]) //새 객체를 추가하는 건 App에서 만듦.

    const onSubmit = useCallback(
        e => {
            {/*prop으로 받아온 onInsert함수에 input값인 value를 넘김 */}
            onInsert(value);
            setValue(''); {/*값 초기화 후, 새로고침 방지*/}
            
            e.preventDefault();
        },
        [onInsert,value]
    )    
    return(
    <form onSubmit= {onSubmit} className="TodoInsert"> {/*value적어야 onchange함수사용할때 e.target.value함 */}
        <input onChange = {onChange} value={value} placeholder="Write down your plans here"></input>
        <button type="submit">
            <MdAdd/>
        </button>
    </form>
    )

}

export default TodoInsert;