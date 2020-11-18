import React from 'react';
import { connect } from 'react-redux';
import HomeNavbar from './HomeNavbar';
import firebase from '../../config/firebase';
import TestApp from './Test';



class Home extends React.Component{

  constructor(){
    super();
    this.state={
      firebaseData:[]
    }
  }
// seller_data = {};
  componentDidMount(){
  
      const arr = []
    firebase.database().ref('/').child(`users/sellerData`).on('child_added', (data)=>{
      arr.push(data.val())
      this.setState({
        firebaseData: arr
      })
    })
  }
  //  seller_data = {

    // 123636126: { name: "blah", email: "blah" },
    // 231273812837: { name: "blah2", email: "blah2" },
    // 23718237127: { name: "blah3", email: "blah3" },
    // 237182371327: null,
    // 376673246234: undefined
  // };


  render(){
    let seller_data = this.state.firebaseData[0] ;
    console.log('state_data=>',seller_data)

    return(
      <div>
        <HomeNavbar/>
        <div>
        {seller_data &&  Object.keys(seller_data).map((data, index) => (
        <div key={index}>
          <div>Firebase Data</div>
          {seller_data[data] &&
            Object.keys(seller_data[data]).map((val,i) => (
              <div key={i}>
                {seller_data[data][val]}
                {/* <img src={seller_data[data].add_photo} alt='' width='100'/> */}
                </div>
            ))}
        </div>
      ))}

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

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Home);