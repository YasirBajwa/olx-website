import firebase from '../../config/firebase';


const facebook_login = (history) => {
    return (dispatch) =>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            let create_user ={
                name : user.displayName,
                email : user.email,
                profile : user.photoURL,
                uid : user.uid,
                mobile : user.phoneNumber
            }
            
            firebase.database().ref('/').child(`users/${user.uid}`)
            .set(create_user)
            .then(()=>{
                dispatch({type:'FACEBOOK_USER', payload : create_user })
                alert('User Login Successfully...');
                console.log('mobile====>',create_user.mobile)
                // history.push('/dashboard');
            })
        

          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error',errorMessage)
            var email = error.email;
            var credential = error.credential;
          });
    }
}
const facebook_logout = (data) =>{
    return(dispatch) =>{
        firebase.auth().signOut()
         .then(function() {
            // Sign-out successful.
            dispatch({type:'FACEBOOK_LOGOUT', payload: data })
          }).catch(function(error) {
            // An error happened.
          });
       
    }
}
const user_form = (history) => {
    return (dispatch) => {
          dispatch({type:'USER_FORM_PAGE',payload:'User Form Page'} ) ;
          history.push('/dashboard') 
        //   console.log('User_form-history==>',history) 
    }
}
const get_users = (dispatch) => {
    return (dispatch) => {
            let users = [];
            firebase.database().ref('/').child('users').on('child_added',(data)=>{
                users.push(data.val());
            })
            dispatch({type:'SET_FIREBASE_USERS',payload: users});

    }
}

export {
    
     facebook_login,
     get_users,
     facebook_logout,
     user_form,
    };

  
