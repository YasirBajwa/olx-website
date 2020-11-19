import React from 'react';
import { connect } from 'react-redux';
import HomeNavbar from './HomeNavbar';
import firebase from '../../config/firebase';
import './Home.css'
import { product_page } from '../../store/action/action';
import OlxBanner from '../../assets/images/OLX-banner.jpg'



class Home extends React.Component{

  constructor(){
    super();
    this.state={
      firebaseData:[],
      get_data : []
    }
  }
  componentDidMount(){
      const arr = []
    firebase.database().ref('/').child(`users/sellerData`).on('child_added', (data)=>{
      arr.push(data.val())
      this.setState({
        firebaseData: arr
      })
    })
  }
user_data = (data) =>{
  console.log('userData==>',data);

}
  render(){
    let seller_data = this.state.firebaseData[0] ;
    // console.log('getData==>',this.state.firebaseData[0])
    // console.log('state cc==>',this.state.get_data)
    return(
      <div>
        <HomeNavbar/>

        <div className='olx__banner'>
           <img src={OlxBanner} alt=''/>
        </div>
        <div className='olx__list__headings'>
        <h2>Fresh recommendations</h2> 

        </div>
        <div  className='cards__list'>
          {seller_data && Object.values(seller_data).map( (data,index) =>{
                     return <div className='user__card'
                                 key={index}
                                 onClick={() => this.props.product_page(data,this.props.history)}
                            >
                        <div className='user__card__content__1'>
                         <div className='content__1__3'>
                              Featured
                         </div>
                          <div className='content__1__1'>
                                {<img src={data.add_photo[0]} width='200px' height='120px' alt=''/>}
                            </div> 

                            <div className='content__1__2'>
                              <i className='fa fa-heart-o'></i>
                            </div>
                         
                         
                          </div> 

                           <div className='user__card__content__2'>
                                   Rs {data.set_price}

                             </div>
                             <div className='user__card__content__3'>
                                   {data.add_title}

                             </div>
                             
                               <div className='user__card__content__4'>
                                        {data.set_location}

                             </div>
                       </div>
          }
          
          )}


      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
 return {
   new_user : state.user,
 }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    product_page: (data,history) => dispatch(product_page(data,history)) 
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Home);