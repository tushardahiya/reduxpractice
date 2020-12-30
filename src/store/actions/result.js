import * as actionTypes from './actionTypes';


export const saveResult = (result) => { //will pass this const to storeResult which is using thunk to handle async action
    return {
        type:actionTypes.STORE_RESULT,
        result:result
    };
}

//using thunk middleware to handle async actions below
export const storeResult = (result) => {
    return dispatch => {
       setTimeout( () => {
            dispatch(saveResult(result));
       }, 3000 )
    }
};

export const deleteResult = (id) => {
    return {
        type:actionTypes.DELETE_RESULT,
        resultElementId:id
    };
};