import React from 'react';
import HomeNavbar from '../Home/HomeNavbar';
import BannerImage from '../../assets/images/banner.jpg';
import GoogleMap from '../../assets/images/Capture2.JPG';

import './Product.css';
import { connect } from 'react-redux';
import FooterSection from '../Footer/Footer';

class ProductDetail extends React.Component {

    render() {
    console.log('state-product...==>',this.props.product_data);
    let {add_title,add_description,add_photo,comapny_name, product_name,set_location,set_phoneNumber,set_price} = this.props.product_data;  
    return (
      <div>
        <HomeNavbar />
        <div className='product__banner'>
          <img src={BannerImage} alt='' />
        </div>


         <div className='product__detail'> 
          <div className='product_left_box'>
            <div className='product_left_box_1'>
                  <img src={add_photo} width='300px' alt=''/>
             </div>
            <div className='product_left_box_2'>
                <h1 className='text-center'>Details:</h1>
                <h3>Descriptions:</h3>
                 {add_description}
            </div>
          </div> 
         
          <div className='product_right_box'>
            <div className='product_right_box_1'>
                <div className='product_right_box1_content_r1'>
                    <div className='product_right_box1_content_1'>
                       <h4> Rs {set_price} </h4>
                    </div>
                    <div className='product_right_box1_content_2'>
                        Icons
                        </div>   
                </div>
                
                <div className='product_right_box1_content_r2'>
                        {product_name} now available for purchase 
                </div>
            
                <div className='product_right_box1_content_r3'>
                    <div className='product_right_box1_content_r3_c1'>
                        Posted
                    </div>
                    <div className='product_right_box1_content_r3_c2'>
                        2 days ago
                    </div>
 
                </div>
            </div>

            <div className='product_right_box_2'>
                <div className='product__right__box__2__c1'>SELLER DISCRIPTION</div>
                <div className='product__right__box__2__c2'>
                    <div>
                        Seller Image
                    </div>

                    <div>
                        Arrow
                    </div>

                </div>
                <div className='product__right__box__2__c3'>
                    <button>Chat with Seller</button>
                </div>

                <div className='product__right__box__2__c4'>
                    <i className='fa fa-phone'></i>
                    <div>*********</div>
                    <p>Show Number</p>
                </div>
            
            </div>
            <div className='product_right_box_3'>
                <h3>Posted In</h3>
            </div>
            <div className='product_right_box_4'>
                <div className='product_right_box_4_c1'>
                    AD ID 124589257
                </div>
                <div className='product_right_box_4_c2'>
                    REPORT THIS AD
                </div>
            </div>

            <div className='product_right_box_5'>
                 <img src={GoogleMap} width='100%' height='100%'/>
            </div>
          </div>


        </div>
        <FooterSection/>

        </div>

    );
  }
}

const mapStateToProps = (state) => {
    return {
        product_data : state.product_data,
        new_user : state.user,
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
