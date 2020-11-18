import React from 'react';


class ImageUploader extends React.Component{
     
    constructor(props){
        super(props);
        this.state ={
            file : null,
            error : null
        }
    }

     types = ['image/png','image/jpeg','image/jpg']


    changeHandler = (e) => {
       let selected = e.target.files[0];
       if(selected  && this.types.includes(selected.type)){
           this.state.file = selected;
           this.state.error = ''
           this.setState({
               file : this.state.file,
               
               
           })


       }else{
           this.state.file = null;
           this.state.error = 'Please select png,jpg or jpeg image format!';
           this.setState({
               error:this.state.error
           })

       }
    }

    render(){
        console.log('state ==>',this.state.file);
        let Images = this.state.file
        console.log('Error==>',this.state.error);
        return(
            <form>
                <input type='file' onChange ={ this.changeHandler} />

                <div className='output'>
                  { this.state.error && <div className='error'>{this.state.error}</div> }
                    {Images && <div>{ Images.name.getDownloadURL()} </div> } 

                </div>
               
            </form>
        )
    }
} 
export default ImageUploader;