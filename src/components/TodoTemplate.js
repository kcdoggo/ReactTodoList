import React from 'react';
import './TodoTemplate.scss';

//화면을 가운데 정렬, 앱 타이틀 보여줌
//저 children은 props.children이고 
//함수의 패러미터가 객체라서 비구조화 할당 문법 사용(props.이 키워드 없이 사용하는 거)
const TodoTemplate = ({children}) =>{

    return (
        <div className="TodoTemplate">
            <div className="app-title">CheckList</div>
            {/*이 TodoTemplate를 사용하는 부모컴포넌트
             App 태그사이가<TodoTemplate>children</> 이 children임. */}
            <div className="content">{children}</div>
        </div>
    )

}

export default TodoTemplate;