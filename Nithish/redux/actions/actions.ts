const logIn = ()=>{
    return {
        type: 'SIGN_IN'
    }
}
const logOut = () =>{
    return {
        type: 'SIGN_OUT'
    }
}
export {logIn, logOut};