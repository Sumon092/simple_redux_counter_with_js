// select dom element
const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

// step:1 initial state
const initialState = {
    value: 0,
}

// step:2 create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1

        };
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1

        };
    }
    else {
        state;
    }
};
// step:3 create store
const store = Redux.createStore(counterReducer);

// step 5: subscription for ui update
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};
// update UI initially
render();
store.subscribe(render);

// step:4 event listener
incrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'increment'
    })
});

decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement'
    })
});
