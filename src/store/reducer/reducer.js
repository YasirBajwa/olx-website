


let INITIAL_STATE = {
  users: [] ,
  check_user : false,
  product_data : []
}


const reducer = (state = INITIAL_STATE,action) => {
        switch(action.type){

          case 'PRODUCT_PAGE' : 
          return {
                  ...state,
                  product_data : action.payload
          } 

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