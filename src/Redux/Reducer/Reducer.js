const LoginDetail={
    UserName:null,
    PassWord:null,
    cart :0
}

const Reducer=(state=LoginDetail,action)=>{
    if(action.type.UName!==state.UserName)
    return{UserName:action.type.UName}
    if(action.type.PWord!==state.PassWord)
    return{PassWord:action.type.PWord}
    console.log(state);
    return state;
}

export default Reducer;