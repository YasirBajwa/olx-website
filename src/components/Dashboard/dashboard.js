import React from 'react';
import './dashboard.css';
import { connect } from 'react-redux';
import firebase from '../../config/firebase'
import { HourglassEmpty } from '@material-ui/icons';

class Dashbaord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test :'Hello....',
      firebaseData : null,
      photo_url : null,
      file: null,
      error: null,
      product_name :'',
      company :'',
      add_title : '',
      add_description : '',
      set_price : '',
      set_location : '',
      set_phoneNumber : ''
    };
  }
  
  product_name = (e) => {
    this.state.product_name = e.target.value;
    this.setState({
      product_name: this.state.product_name
    })
  }
  company = (e) => {
    this.state.company = e.target.value;
    this.setState({
      company: this.state.company
    })
  }
  add_title = (e) => {
    this.state.add_title = e.target.value;
    this.setState({
      add_title: this.state.add_title
    })
  }
  add_description = (e) => {
    this.state.add_description = e.target.value;
    this.setState({
      add_description: this.state.add_description
    })
  }
  set_price = (e) => {
    this.state.set_price = e.target.value;
    this.setState({
      set_price: this.state.set_price
    })
  }
  set_location = (e) => {
    this.state.set_location = e.target.value;
    this.setState({
      set_location: this.state.set_location
    })
  }
  set_phoneNumber = (e) => {
    this.state.set_phoneNumber = e.target.value;
    this.setState({
      set_phoneNumber: this.state.set_phoneNumber
    })
  }


  types = ['image/png', 'image/jpeg', 'image/jpg'];

   handleChange = (e) => {
    let selected = e.target.files[0];
    let id = this.props.users.uid;

    if (selected && this.types.includes(selected.type)) {
      this.state.file = selected;
      this.state.error = '';
      this.setState({
        file: URL.createObjectURL(selected),
      });
      console.log('state==>',this.state.photo_url);
      let arr_url = [] ;

      let uploadTask = firebase.storage().ref().child(`images/${selected.name}`).put(this.state.file)
      uploadTask.on('state_changed', function(snapshot){
        // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        //   case firebase.storage.TaskState.PAUSED: // or 'paused'
        //     console.log('Upload is paused');
        //     break;
        //   case firebase.storage.TaskState.RUNNING: // or 'running'
        //     console.log('Upload is running');
        //     break;
        // }
      }, function(error) {
      }, function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          arr_url.push(downloadURL);
          console.log('arr_url==>', arr_url);

        });
      }); 

      this.state.photo_url = arr_url;
      this.setState({
        photo_url: this.state.photo_url
      })
      console.log('photo_url==>',this.state.photo_url)

    } else {
      this.state.file = null;
      this.state.error = 'Please select png,jpg or jpeg image format!';
      this.setState({
        error: this.state.error,
      });
    }
  };

send_sellerData = (e) => {
  e.preventDefault();

  let seller_detail ={
    product_name : this.state.product_name,
    comapny_name : this.state.company,
    add_title : this.state.add_title,
    add_description : this.state.add_description,
    set_price : this.state.set_price,
    set_location : this.state.set_location,
    set_phoneNumber : this.state.set_phoneNumber,
    add_photo : this.state.photo_url
  }

  let id = this.props.users.uid;

  firebase.database().ref('/').child(`users/sellerData/${id}`).push(seller_detail)
  .then(()=>{
    alert('Your Form has been submitted Sucessfully');
    this.setState({
     
      product_name :'',
      company :'',
      add_title : '',
      add_description : '',
      set_price : '',
      set_location : '',
      set_phoneNumber : ''
    })
   
}).catch(function(error) {
  var errorMessage = error.message;
  alert('Sorry Your form could not be submitted',errorMessage)

});
 
}  

  render() {
   
    let user = this.props.users;
    // console.log('state==>',this.state.firebaseData[0])
    return (
      <form onSubmit={(e) => this.send_sellerData(e)}>
        <div className='header__wrapper'>
          <div className='header__wrapper__conetent'>
            <i className='fa fa-long-arrow-left'></i>
            <h3>OLX</h3>
          </div>
          <div className='form__section'>
            <div className='form__section__heading'>
              <h2 className='text-center'>POST YOUR AD</h2>
              <div
                className='card  mb-3'
                style={{ margin: '0 auto', maxWidth: '60%', height: '1500px' }}
              >
                <div className='card-header bg-transparent '>
                  <h5>Selected Catagory</h5>
                </div>
                <div className='card-body '>
                  
                  <div className='card__conetnent__1'>
                    <h5>INCLUDE SOME DETAILS</h5>
                    <input value={this.state.product_name} required type='text' onChange= { (e) => this.product_name(e)} placeholder='Enter Product Name' />
                  </div>
                  <br />
                  <div className='card__conetnent__2'>
                    Enter The Company Name: <br />
                    <input value={this.state.company} required type='text' onChange= { (e) => this.company(e)} placeholder='Company Name...' />
                  </div>
                  <br />
                  <div className='card__conetnent__3'>
                    Add Title: <br />
                    <input
                    required
                    value={this.state.add_title}
                      type='text'
                      onChange= { (e) => this.add_title(e)}
                      placeholder='Mention the key features of your item (e.g. brand, model, age, type)'
                    />
                  </div>
                  <br />
                  <div className='card__conetnent__4'>
                    Add Discription: <br />
                    <textarea value={this.state.add_description}  name='w3review' rows='8' cols='60' onChange= { (e) => this.add_description(e)}>
                      Add details here in points e.g 
                      240 Yards G + 1 House brand new house leased house west open
                      internal structure material
                      Amreeli steel iron used
                      Pakistan cable wiring
                    </textarea>
                  </div>
                  <br />

                  <div className='card__conetnent__5'>
                    <h5>SET A PRICE</h5>
                    <input value={this.state.set_price} required type='text' onChange= { (e) => this.set_price(e)} placeholder='Enter Price' />
                  </div>
                  <br />
                  <div className='card__content__6'>
                    <input required type='file' multiple onChange={this.handleChange} />
                    <img src={this.state.file} width='100' />
                    <div className='output'>
                      {this.state.error && (
                        <div className='error'>{this.state.error}</div>
                      )}
                    </div>
                  </div>
                  <br />

                  <div className='card__content__7'>
                    <h5>Confirm Your Location</h5>

                    <input value={this.state.set_location} required onChange= { (e) => this.set_location(e)} placeholder='Enter Your City Name ' />
                  </div>
                  <br />

                  <div className='card__content__8'>
                    <h5>Review Your Detail</h5>
                    <img
                      src={user.profile}
                      alt=' '
                      width='100'
                      style={{ borderRadius: '25px' }}
                    />

                    <h6>name :{user.name}</h6>
                    <h6>Email :{user.email}</h6>
                    <h6>Mobile : {user.mobile}</h6>
                  </div>
                  <div className='card__content__9'>
                    <p>Add Phone Number</p>
                    <input value={this.state.set_phoneNumber} required type='number'  onChange= { (e) => this.set_phoneNumber(e)}/>
                  </div>
                </div>
                <div className='card-footer bg-transparent '>
                  <button type='submit' className='btn btn-danger btn-block' >
                    POST Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    check_user: state.check_user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // facebook_login : (history) => dispatch( facebook_login(history) ),
    // facebook_logout : () => dispatch(facebook_logout()),
    // user_form : (history) => dispatch (user_form(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashbaord);
