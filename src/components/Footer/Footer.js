import React from 'react';
import './Footer.css';
import PhoneImage from '../../assets/images/phone-app.webp';
import PlaystoreImg from '../../assets/images/playstore_2x.webp';
import AppstoreImg from '../../assets/images/appstore_2x.webp';

class FooterSection extends React.Component {
  render() {
    return (
      <div>
        <div className='footer__section'>
          <div className='footer__section__content'>
            <div className='footer__section__content__1'>
              <img src={PhoneImage} alt='' />
            </div>
            <div className='footer__section__content__2'>
              <h1>TRY THE OLX APP</h1>
              <p>
                Buy, sell and find just about anything using <br />
                the app on your mobile.
              </p>
            </div>
            <div className='footer__section__content__3'>
              <h6>GET YOUR APP TODAY</h6>
              <div className='store__images'>
                <div className='play__store'>
                  <img src={PlaystoreImg} alt='' />
                </div>
                <div className='app__store'>
                  <img src={AppstoreImg} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__section__2'>
          <div className='footer__section__2__c1'>
            <table className='table table-borderless'>
              <thead>
                <tr>
                  <th scope='col'>POPULAR CATEGORIES</th>
                  <th scope='col'>TRENDING SEARCHES</th>
                  <th scope='col'>ABOUT US</th>
                  <th scope='col'>OLX</th>
                  <th scope='col'>FOLLOW US</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >Cars</td>
                  <td>Bikes</td>
                  <td>About OLX group</td>
                  <td>Help</td>
                  <td>OLX for Business</td>
                </tr>
                <tr>
                  <td >Places for rent</td>
                  <td>Watches</td>
                  <td>OLX Blog</td>
                  <td>Site map</td>
                  <td className='social__icons__list'>
                      <i className='fa fa-facebook'></i>
                      <i className='fa fa-twitter'></i>
                      <i className='fa fa-instagram'></i>
                      <i className='fa fa-whatsapp'></i>

                  </td>
                </tr>
                <tr>
                  <td >Jobs</td>
                  <td>Books</td>
                  <td>OLX Blog</td>
                  <td>Legal & Privacy Information</td>

                </tr>
                <tr>
                  <td >Mobile Phones</td>
                  <td>Dogs</td>
                  <td>OLX for Business</td>
                  <td>Terms & Conditions</td>

                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      
       <div className='footer__section__3'>
             <div className='footer__section__3__c1'>
                 <div className='footer__section__c1__1'>
                        Other Coutries  India - South Africa - Indonesia
                 </div>
                 <div className='footer__section__c1__2'>
                 Free Classifieds in Pakistan. © 2006-2020 OLX
                 </div>
             </div>
          
       </div>
      
      
      
      
      
      
      
      
      </div>

    
    );
  }
}

export default FooterSection;
