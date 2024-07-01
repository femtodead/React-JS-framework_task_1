import { useState } from "react";

function CommentsList() {
    
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);
    
  const delElem = (event) => {

    
    event.target.parentElement.remove();
  }


    return comments.map((comm) => 
    <div >
        <h2>{comm.text}</h2>
        <button id={comm.id-1} onClick={delElem}>Удалить</button>
    </div>
    );
}

export default CommentsList;