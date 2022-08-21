export default (state={
    count:0
}, action) => {
    switch (action.type) {
        case "PLUSH": {
            state.count++
            return state
        }
        default: {
            return state
        }
    }
}