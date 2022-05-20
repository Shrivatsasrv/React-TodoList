import React, { useState } from 'react'
import './App.css';

function App(){

  const[inputData,setInputData]=useState('');
  const[items,setItems]=useState([]);
  const[toggleSubmit,setToggleSubmit]=useState(true);
  const[isEditItem,setIsEditItem]=useState(null);
  const additem=()=>{
    if(!inputData){
      alert(`You Can't Add Empty data`)
    }
    else if(inputData && !toggleSubmit){
      setItems(
          items.map((elem)=>{
            if(elem.id ===isEditItem){
              return{...elem,name:inputData}
            }
            return elem;
          })
         
       
      )
      setToggleSubmit(true);
      setInputData('');
      setIsEditItem(null);

    }
    else{
     const allInputData={id:new Date().getTime().toString(), name:inputData}
    setItems([...items,allInputData])
    setInputData('')
    }
  }

  //delete
  const deleteItem=(index)=>{
  // console.log(id);
  const updatedItems=items.filter((elem)=>{
    return index!==elem.id ;
  })
  setItems(updatedItems);
  }
// Editing
  const EditItem=(id)=>{
    let newEditItem=items.find((elem)=>{
      return elem.id ===id;

    })
    console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  }

  //Deleting
  const removeAll=()=>{
    setItems([])
  }
 
  return(
    <>
    <h1>Todo-List</h1>
    <div className="additems">
      <input type="text" placeholder='Add Items' name='item' value={inputData} onChange={(e)=> setInputData(e.target.value) } />
      {
        toggleSubmit?<button id="btn1" onClick={additem}>Add</button>:<button id="btn1" style={{backgroundColor:'blue'}}onClick={additem}>Update</button>
      }
      {/* <button id="btn1" onClick={additem}>Add</button> */}
    </div>
    <div className="showitems">
      
      {
        items.map((elem)=>{
          return(
            <>
            <div className='aa' key={elem.id}>
            <div className="center" >
        <p>{elem.name}</p>
        </div >
        <div className="center2">
        <button id='btn2' style={{backgroundColor:'Blue'}}onClick={()=> EditItem(elem.id)}>Edit</button>
        <button id='btn2' onClick={()=> deleteItem(elem.id)} >Remove</button>
        </div>
        </div>
            </>
          )
        })
      }
      
      
  
  </div>
    
    
  

    <div class="removeall">
      <button id='btn3' onClick={removeAll}>Remove All</button>
    </div>
    
    </>
  )
}

export default App;
