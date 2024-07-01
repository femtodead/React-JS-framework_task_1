import { useState } from "react";

function CommentsList() {
    
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);
    
  const delElem = (event) => {

    let newArr = Object.assign([], comments);
    newArr.splice(event.target.id, 1);
    for (let index = 0; index < newArr.length; index++) {
        newArr[index].id = index+1;
        
    }
    
    setComments(newArr)
    
    // event.target.parentElement.remove(); второй вариант удаляет сам элемент из dom дерева не трогая внутренний список
  }


    return comments.map((comm) => 
    <div >
        <h2>{comm.text}</h2>
        <button id={comm.id-1} onClick={delElem}>Удалить</button>
    </div>
    );
}

export default CommentsList;