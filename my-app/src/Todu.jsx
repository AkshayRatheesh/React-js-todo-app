import React, { Component } from 'react'
import './App.css'

export default class Todu extends Component {
    constructor(props){
        super(props);

        this.state ={
            listData:[],
            inDatas:""
        }
    }

    inputData=(e)=>{
        this.setState({inDatas:e.target.value})
    }

    addItem=()=>{
       let currentData=this.state.inDatas
       let currentItems=this.state.listData
       if(currentData!==""){
            currentItems.push(currentData)
            this.setState({listData:currentItems}
      )}
    }

    deleteItem=(key)=>{
        if(!window.confirm("are you sure?")){
            return
        }
       let currentItems=this.state.listData
       currentItems.splice(key,1)
       this.setState({listData:currentItems})

    }

  render() {
    return (
      <div className='todo'><center>
       <input type='text' onChange={this.inputData}/>
       <input type='submit' value='add' onClick={this.addItem}/>

       <ul>
           
               {
                   this.state.listData.map((list,key)=>{
                       return(
                           <li key={key}>
                               {list}
                               <button onClick={()=>this.deleteItem(key)}>dlt</button>
                           </li>
                       )
                   })
               }
           
       </ul>
<p>{this.state.inDatas}</p></center>
      </div>
    )
  }
}
