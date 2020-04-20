import * as types from './types';

// use this approach for namespacing purposes
export default {
    [types.VALUE]: state => {
        return state.value;
    }
}

// export const value = state => {
//     return state.value;
// }