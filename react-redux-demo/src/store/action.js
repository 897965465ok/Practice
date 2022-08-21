export const PLUSH = (number) => ({
    type: "PLUSH",
    content: number
})

export const ACTION = () => {
    return {
        type: 'ACTION',
        value: 'action'
    }
}

export const ASYNC = () => {
    return (dispatch, State) => {
        fetch("www.baidu.com")
            .then(res => {
                console.log(res)
                dispatch({
                    type: "ASYNC",
                    content: res
                })
            })
    }

}