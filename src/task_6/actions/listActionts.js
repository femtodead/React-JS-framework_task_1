
export const IZ_PRODUCT =  "IZ_PRODUCT";
export const ADD_PRODUCT =  "ADD_PRODUCT";
export const DEL_PRODUCT =  "DEL_PRODUCT";
export const Ed_PRODUCT =  "Ed_PRODUCT";
export const SAVE_PRODUCT = 'SAVE_PRODUCT'
export const addPoduct =  (el) =>({
    type: ADD_PRODUCT,
    payload: {el},
});
export const delPoduct =  (id) =>({
    type: DEL_PRODUCT,
    payload: {id},
});
export const izPoduct =  (id) =>({
    type: IZ_PRODUCT,
    payload: {id},
});
export const EdPoduct =  (id) =>({
    type: Ed_PRODUCT,
    payload: {id},
});
export const saveProd = (el) =>({
    type: SAVE_PRODUCT,
    payload: {el},
});