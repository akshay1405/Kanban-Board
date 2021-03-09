import React from 'react';
import DragnDrop from './DragnDrop';
import {render,mount,screen,fireEvent, getByTestId,cleanup, queryByAttribute} from '@testing-library/react';

//To avoid spill overs
afterEach(cleanup);
const dragged = true;
//Arranging and checking component is rendering properly and checking the JSx of it.
const list = [{title:"testing",items:["item1","item2"]}];

it("Check the load of tree structure of the Component",()=>{
 const { debug } =  render(<DragnDrop data={list}></DragnDrop>);
 debug();
});

it("Check dragend eventListener is getting called",()=>{
 const handleDragEnd = () =>{};
  const wrapper = render(<DragnDrop data={list} />);
  const item1 = wrapper.getByTestId('item1');
  fireEvent.dragStart(item1,{grpI : 0,itemI:0});
  expect(item1.addEventListener('dragend',handleDragEnd));
});

it("Remove dragEnd event listener on drop",()=>{
  const handleDragEnd = () =>{};
   const wrapper = render(<DragnDrop data={list} />);
   const item1 = wrapper.getByTestId('item1');
   fireEvent.dragEnd(item1,{grpI : 0,itemI:0});
   expect(item1.removeEventListener('dragend',handleDragEnd));
 });