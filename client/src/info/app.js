import React from "react";
import InfoForm from "./form";
import InfoTable from "./table";
import axios from "axios";

class App  extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      data:[],
      editData:[]
    }
  }
  create = data =>
  {
    if(!data.Edit) 
    {
      axios.post("http://localhost:5000/info",data).then(res =>{  
            // console.log(res);
            this.getAll();
          })
    }
    else
    {
      axios.put("http://localhost:5000/info/update",data).then(res =>{  
             //console.log(res);
             this.getAll();
           })
    }
  }
  componentDidMount()
  {
   this.getAll();
 }
 getAll()
 {
  axios.get("http://localhost:5000/info").then(res =>{  
            // console.log(res.data);
            this.setState({data:res.data})
          })
}   
update = data =>
{
  console.log(data);
  this.setState({editData:data})
}

del = data =>
{
  const option = window.confirm("are you want to delete "+data.Name)
  if(option)
  {
    axios.delete("http://localhost:5000/info/del/"+data._id).then(res =>{
                    // console.log(res);
                    this.getAll();
                  })
  }
}
render()
{
  return(
    <div className="container mt-4">
    <div className="row">
    <div className="col-6">
    <h1>InfoForm</h1>
    <InfoForm myData = {this.create} setForm = {this.state.editData}/>
    </div>
    <div className="col-6">
    <h1>InfoTables</h1>
    <InfoTable getData ={this.state.data} setData = {this.update} del={this.del}/>
    </div>
    </div>
    </div>
    )}
  }

  export default App; 