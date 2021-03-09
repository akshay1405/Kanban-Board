import React,{useState,useRef} from 'react';
// import './App.css';

const DragnDrop = (props) =>{
   const [list,setlist] = useState(props.data);
   const [dragged,IsDragged] = useState(false);
   const dragItem = useRef();
   const dragNode = useRef();
   const handleDragStart = (e,params) => {
       console.log("Dragging Started:"+ "grp "+ params.grpI +" item "+params.itemI);
       dragItem.current = params; 
       dragNode.current = e.target;
       dragNode.current.addEventListener("dragend",handleDragEnd);
       setTimeout(() => {
        IsDragged(true);
       },0);
   }
   const handleDragEnd = ()=>
   {
    IsDragged(false);
    dragNode.current.removeEventListener("dragend",handleDragEnd);
    dragItem.current = null; 
    dragNode.current = null;

   }
   const handleDragEnter = (ev,params) =>{
      let currentItem = dragItem.current;
       if(ev.target != dragNode.current){
         setlist(updateList =>{
             let newList = JSON.parse(JSON.stringify(updateList));
             newList[params.grpI].items.splice(params.itemI,0,newList[currentItem.grpI].items.splice(currentItem.itemI,1)[0])
             dragItem.current = params;
             return newList;
            })
       }
   }
   const getStyles = (params) =>{
       const currentItem = dragItem.current;
      if(params.grpI === currentItem.grpI && params.itemI === currentItem.itemI)  {return "current dnd-item"}
      else {return "dnd-item";}
   }
return(
    <div className="drag-n-drop">
        {list.map((grp,grpI)=>(
          <div key={grp.title} data-testid={grp.title}
          onDragEnter ={dragged && !grp.items.length ?(ev) => handleDragEnter(ev,{grpI,itemI:0}) : null}
          className="dnd-group">

          <div className="group-title">{grp.title}</div>
          {grp.items.map((item,itemI)=>(

              <div draggable key={item} data-testid={item}
               onDragStart = {(ev)=>handleDragStart(ev,{grpI,itemI})}
               onDragEnter = {dragged ? (ev) => handleDragEnter(ev,   {grpI,itemI}) : null}
              className={dragged ? getStyles({grpI,itemI}): "dnd-item"}
              >

                     {item}
              </div>
        ))}
          </div>
        ))}
        </div>
);
}

export default DragnDrop;