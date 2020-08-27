import React from "react";

class InfoForm  extends React.Component
{
    constructor()
    {
        super();
        this.state= {
            _id:"",
            Name:"",
            Age:"",
            City:"",
            Edit:false
        }
    }
    infochange = event =>
    {
        const { name,value } = event.target;
        this.setState({[name]:value})
    }
    infoSubmit = event =>
    {  
        if(!this.state.Edit)
        {
            let data = {
               Edit:this.state.Edit,
               Name:this.state.Name,
               Age:this.state.Age,
               City:this.state.City
           }
           this.props.myData(data)
       }
       else
       {   
        let data= {
            Edit:this.state.Edit,
            _id:this.state._id,
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
        this.props.myData(data)
    }

}

componentWillReceiveProps(props)
{
    if(props.setForm._id != null) 
    {
        this.setState({
            Edit:true,     
            _id:props.setForm._id,
            Name:props.setForm.Name,
            Age:props.setForm.Age,
            City:props.setForm.City
        })
    }
        // console.log(props)
    }
    render()
    {
        return(
            <form onSubmit={this.infoSubmit} autoComplete="off">
            <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" placeholder="enter name"
            onChange={this.infochange}
            name="Name"
            value = {this.state.Name}/>
            </div>
            <div className="form-group">
            <label>City:</label>
            <input type="text" className="form-control" placeholder="enter city"
            onChange={this.infochange}
            name="City"
            value = {this.state.City}/>
            </div>
            <div className="form-group">
            <label>Age:</label>
            <input type="text" className="form-control" placeholder="enter age"
            onChange={this.infochange}
            name="Age"
            value = {this.state.Age}/>
            </div>
            <button type="submit" className="btn btn-primary">{this.state.Edit ? 'update' : 'create'}</button>
            </form>
            )
        }
    }
    export default InfoForm;