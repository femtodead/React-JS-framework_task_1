import './Message.css';

function bool(text) {
    if ('true' == text) {
        return true;
    } else if('false' == text){
        return false
    }
}


function Message({text, boolText}) {
    let flag = bool(boolText)
    return ( 
        <div style={{color : flag ? 'red' : 'green'}} className="text">{text}</div>
     );
}

export default Message;