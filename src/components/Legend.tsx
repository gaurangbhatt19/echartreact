import React from 'react'
import { colorList } from '../db'
import { chartValuesType } from '../types/valueTypes';

const Legend:React.FC<{setFilterValues:any,filterValues:any}> = (props:{setFilterValues:any,filterValues:any}) => {

  const colorCode=colorList

  const classes={
    legendDiv:{
      border:"2px solid cyan",
      borderRadius:"1em",
      marginTop:"3em",
      padding:"1em 1em",
      backgroundColor:"rgb(0, 255, 255,0.1)"
    },
    listElement:{
      display:"grid",
      justifyContent:"center",
      gridTemplateColumns:"1fr 2fr 1fr"
    },
    legendColor:{
       width:"2em",
       height:"2em",
       borderRadius:"7px",
       marginTop:"18%"
       }
  }

  return (
    <div style={classes.legendDiv}>
      <ul style={{marginLeft:"-2em"}}>
        {
          props.filterValues?.map((item:chartValuesType,index:number)=>{
          
            return(
            <li key={index} className={!item.render?"disabled":undefined} style={classes.listElement} 
            
            onClick={()=>{
              let values=props.filterValues
              var atomJs:chartValuesType[]=[]


              if(item.render){
                for(let i=0;i<values.length;i++){
                if(values[i].name===item.name){
                  atomJs.push({
                    ...values[i],
                    render:false
                  })
                }else{
                  atomJs.push(values[i])
                }
              }
              }else{
                for(let i=0;i<values.length;i++){
                  if(values[i].name===item.name){
                    atomJs.push({
                      ...values[i],
                      render:true
                    })
                  }else{
                    atomJs.push(values[i])
                  }
              }
            }

              props.setFilterValues(atomJs)
            }}>
              <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{
                  backgroundColor: !item.render?"rgb(84, 167, 167)":colorCode[index],
                   ...classes.legendColor
                   }}>
                  
                </div>
              </div>

              <div style={{display:"flex",justifyContent:"start"}}>
                <h3>{item.name}</h3>
              </div>

              <div style={{display:"flex",justifyContent:"start"}}>
                <h3>{item.value}</h3>
              </div>
              
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Legend