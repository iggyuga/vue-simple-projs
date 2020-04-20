import * as types from './types'

// use this approach for namespacing purposes
export default {
    [types.ACTION_UPDATE_VALUE]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_VALUE, payload);
    }
}

// export const updateValue = ({commit}, payload) => {
//     commit('updateValue', payload);
// }