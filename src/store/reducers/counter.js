import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter :0
}

const reducer = (state= initialState , action) => {

    // this is the shorter streamlined way where i use a utility function in the utility.js file
    //  which deos all the spreading of the  updated state in the old state and recieves 2 parameters -> the old state and the values of be changes
    // which can be seen here. TO SEE THE PREVIOUS WAY CHECK OUT THE COMMENTED ORIGINAL WAY BELOW

    switch(action.type) {

        case actionTypes.INCREMENT:
            return updateObject(state , {counter:state.counter+1} )

        case actionTypes.DECREMENT:
            return updateObject(state , {counter:state.counter-1} )

        case actionTypes.ADD:
            return updateObject(state , {counter:state.counter+action.value} )

        case actionTypes.SUBTRACT:
            return updateObject(state , {counter:state.counter-action.value} )

        default:
            return state;
            
    }

    // OLD WAY OF USING THE ACTIONTYPES WITHOUT IMPLEMENTING THE UTILITY.JS FUNCTION THAT STREAMLINED THE REDUCER FILE.....
    
    // switch(action.type) {
    //     case actionTypes.INCREMENT:
    //         return {
    //             ...state,
    //             counter:state.counter+1
    //         }
    //     case actionTypes.DECREMENT:
    //         return {
    //             ...state,
    //             counter:state.counter-1
    //         }
    //     case actionTypes.ADD:
    //         return{
    //             ...state,
    //             counter:state.counter+action.value
    //         }
    //     case actionTypes.SUBTRACT:
    //         return{
    //             ...state,
    //             counter:state.counter-action.value
    //         }
    //     default:
    //         return state;
    // }
}

export default reducer;