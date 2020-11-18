

let INITIAL_STATE = {
  users: [] ,
  check_user : false
}


const reducer = (state = INITIAL_STATE,action) => {
        switch(action.type){
          case  'FACEBOOK_USER':
            return {
              ...state,
              users : action.payload,
              check_user : true

            }
            case 'FACEBOOK_LOGOUT':
              return {
                ...state,
                users: [],
                check_user : false
              }
            case 'USER_FORM_PAGE':
              return {
                ...state
              }  
        }       
  

    return state;
        
}

export default reducer;