import { useDispatch, useSelector } from "react-redux";
import { delPoduct, izPoduct } from "../actions/listActionts";


function ListProdust() {

    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    const del = (e) => {
        dispatch(delPoduct(e.target.id.split('del')[1]))
    }
    const iz = (e) => {
        dispatch(izPoduct(e.target.id.split('iz')[1]))
    }
    return ( 
        <div>
            <h1>Список продуктов:</h1>
            {list.map((el)=> 
                <div>
                    <span>{el.id}   </span>
                    <span>{el.name}   </span>
                    <span>{el.description}   </span>
                    <span>{el.price}   </span>
                    <span>{el.available}   </span>
                    <button id={`iz`+ (el.id-1)} onClick={iz}>Изменить доступность</button>
                    <button id={`del`+ (el.id-1)} onClick={del} >Удалить элемент</button>
                </div>
            )}
        </div>
     );
}

export default ListProdust;