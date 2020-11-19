import React from 'react';
import {withRouter} from 'react-router-dom'
import Logo from '../../assets/images/olx-logo.png';
import './HomeNavbar.css';
import './modal.css';
import { connect } from 'react-redux';
import {facebook_login ,facebook_logout,user_form} from '../../store/action/action';

class HomeNavbar extends React.Component {
  go_home = (history) =>{
    history.push('/')
  }
 
    render(){
      let check_user = this.props.check_user;


        return(
            <div>
{/* Modal */}
<div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header" style={{border:'none'}}>
               
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body modal__content modal__body__btns" style={{border:'none'}}>
                   <div className='modal__body__fb__btn'>
                     <button onClick={() => this.props.facebook_login(this.props.history) }>Continue with facebook</button>
                     </div> 
                     <div className='modal__body__fb__btn'>
                     <button>Continue with google</button>
                     </div>
                     <div className='modal__body__fb__btn'>
                     <button>Continue with phone number</button>
                     </div>
                     <div className='modal__body__fb__btn'>
                     <button>Continue with email</button>
                     </div>    
              </div>
            </div>
          </div>
        </div>
      </div>

{/* End of Modal */}


         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src={Logo} alt='olx-logo'  onClick={() => this.go_home(this.props.history)} width='80' />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <div className='header__location__input'>
                    <input type='text' placeholder="&#xF002;     Search" style={{fontFamily:'Arial, FontAwesome'}}/>
            </div>

            <div className='header__product__search'>
            <input type='text' placeholder='Find Cars,Mobile Phones and more...' />
            <div className='header__product__search__btn' >
              <i className='fa fa-search' ></i>

            </div>
          
            </div>
            <div className='header__btns'>
              {  check_user  ?
             

             <div className='header__user__detail'>
             
             <div className='header__user__profile'>
              <p>Welcome <br/><b>{this.props.users.name}</b></p>
               </div>   
             <div className='header__logout__btn'>
            <button onClick={ () => this.props.facebook_logout()} className='btn btn-dark' data-toggle="modal" data-target="#exampleModal">Logout</button>
             </div>

             </div>
              :
           
            <div className='header__login__btn'>
            <button className='btn btn-info' data-toggle="modal" data-target="#exampleModal">Login</button>
          </div>
              
              }
              { !check_user  ?
                <div className='header__sell__btn'>
                <button className='btn btn-info' data-toggle="modal" data-target="#exampleModal">SELL</button>
              </div>
               
               
              :
              <div className='header__sell__btn'>
              <button className='btn btn-info' onClick ={ () => this.props.user_form(this.props.history) }>SELL Product</button>
            </div>
             

              }

            </div>
             

          </ul>
        </div>
      </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return {
         users : state.users,
         check_user : state.check_user 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
          facebook_login : (history) => dispatch( facebook_login(history) ),
          facebook_logout : () => dispatch(facebook_logout()),
          user_form : (history) => dispatch (user_form(history)),
  }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomeNavbar));