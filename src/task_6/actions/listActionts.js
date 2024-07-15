
export const IZ_PRODUCT =  "IZ_PRODUCT";
export const ADD_PRODUCT =  "ADD_PRODUCT";
export const DEL_PRODUCT =  "DEL_PRODUCT";
export const AllEd_PRODUCT =  "AllEd_PRODUCT";
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
export const allEdPoduct =  (el) =>({
    type: AllEd_PRODUCT,
    payload: {el},
});