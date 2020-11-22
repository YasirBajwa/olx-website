import React from 'react';
import {withRouter} from 'react-router-dom'
import Logo from '../../assets/images/olx-logo.png';
import './HomeNavbar.css';
import './modal.css';
import { connect } from 'react-redux';
import {facebook_login ,facebook_logout,user_form} from '../../store/action/action';
import AvtarImage from '../../assets/images/avtar.png'

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
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <div className='header__location__input'>
                   <div className='header__location__input__1'>
                          <i className='fa fa-search'></i>
                   </div>
                   <div className='header__location__input__2'>
                   <input type='text'placeholder='Search City,area or town'  />

                  </div>
                      <div className='header__location__input__3'>
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </div>
            </div>

            <div className='header__product__searching__wrapper'>
                      <div className={!check_user ? 'header__product__searching' : 'header__product__searching__'}>
                      <input type='text' placeholder='Find Cars,Mobile phones and more...' />
                      </div>
                      <div className='header__product__searching__btn'>
                        <i className='fa fa-search'></i>

                      </div>
            </div>

            <div className='header__btns'>
              {  check_user  ?
             

             <div className='header__user__detail'>
             <div className='header__user__chat__opt'>
               <i className='fa fa-comment-o'></i>
             </div>
             <div className='header__user__bell__opt'>
             <i class="fa fa-bell-o" aria-hidden="true"></i>
             </div>

             <div className='header__user__avtar__img'>
               <img src={AvtarImage} width='40' alt='' />

             </div>

             <div className='header__user__profile'>
             <div class="dropdown show user__profile__dropdown__">
             <i class="fa fa-angle-down " aria-hidden="true"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
           

             <div class="dropdown-menu dropdown-menu-right " aria-labelledby="dropdownMenuLink">
                  
                  <div className='drop__menue__content__1'>
                     <div className='drop__menue__content__1__1'>
                       <img src={AvtarImage} alt='' width='60' />

                     </div>
                     <div className='drop__menue__content__1__2'>
                       Hello, <br/>
                       <h5> Test User{this.props.users.name}</h5>
                       <p>Vist and edit Profile</p>

                     </div>

                  </div>
                  <div className='drop__menue__content__2'>
                    <h5>2 Steps Left</h5>
                    <div className='steps__bars'>
                    <div className='steps__bars__1'></div>
                    <div className='steps__bars__2'></div>
                    <div className='steps__bars__3'></div>
                    <div className='steps__bars__4'></div>
                    <div className='steps__bars__5'></div>


                    </div>
                  </div>
                  <div className='drop__menue__content__2__'>
                    OLX is built on trus.Help other people get <br/> to know you.
                      Tell them about the things you like
                    

                  </div>
                  <div className='drop__menue__content__3'>
                        <i className='fa fa-address-card-o'></i>
                        <div>My Ads</div>
                  </div>
                  <div className='drop__menue__content__3'>
                  <i class="fa fa-building" aria-hidden="true"></i>
                        <div>Buy Business Packages</div>
                  </div>
                  <div className='drop__menue__content__3'>
                  <i class="fa fa-window-maximize" aria-hidden="true"></i>
                        <div>Bought Business & Billings</div>
                  </div>
                  <div className='drop__menue__content__3'>
                  <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                  <div>Help</div>
                  </div>
                  <div className='drop__menue__content__3'>
                  <i class="fa fa-sliders" aria-hidden="true"></i>
                          <div>Settings</div>
                  </div>
                  <div className='drop__menue__content__3'>
                  <i class="fa fa-caret-square-o-left" aria-hidden="true"></i>
                        <div onClick={ () => this.props.facebook_logout()} className='header__logout__div_' data-toggle="modal" data-target="#exampleModal">Logout</div>
                  </div>

                
                {/* <p>Hello, <br/><b>{this.props.users.name}</b></p> */}

               {/* <div className='header__logout__div'>
            <div onClick={ () => this.props.facebook_logout()} className='header__logout__div_' data-toggle="modal" data-target="#exampleModal"><span>Logout</span></div>
             </div> */}
               </div>


                </div>
              
              
              
               </div>   
            

             </div>
              :
            //  {/* : */}
             <div className='header__login__div'>
            <div className='header__login__div_' data-toggle="modal" data-target="#exampleModal">Login</div>
            <div>
              
              </div> 

          
          </div> 
    }
              
              {/* } */}
              { !check_user  ?
                <div className='frame'>
                <button className='custom-btn btn-3' data-toggle="modal" data-target="#exampleModal"><span>SELL</span></button>
              </div>
               
               
              :
              <div className='frame'>
              <button className='custom-btn btn-3' onClick ={ () => this.props.user_form(this.props.history) }><span>SELL Product</span></button>
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