import * as types from '../types';

const state = {
    counter: 0,
}

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    [types.MUTATE_INCREMENT]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUTATE_DECREMENT]: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
    [types.ACTION_INCREMENT_COUNTER]: (context, payload) => { // ({commit})
        context.commit(types.MUTATE_INCREMENT, payload);
    },
    [types.ACTION_DECREMENT_COUNTER]: (context, payload) => { // ({commit})
        context.commit(types.MUTATE_DECREMENT, payload);
    },
    [types.ACTION_INCREMENT_ASYNC_COUNTER]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_INCREMENT, payload.by);
        }, payload.duration)
    },
    [types.ACTION_DECREMENT_ASYNC_COUNTER]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_DECREMENT, payload.by);
        }, payload.duration)
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}