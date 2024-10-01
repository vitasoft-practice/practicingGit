'use client'

//import sstyles from "../styles/styles.scss";
import sstyles from "../page.module.sass";

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectBooks } from '../../lib/features/loginSlice';
import { loginSuccess, setPage } from '../../lib/features/loginSlice';
import RLEntry from "./RLEntry";
import { useDispatch } from 'react-redux';

export const dynamic = 'force-dynamic'

export default function ReadingList() {
  let books = useSelector(selectBooks);
  const dispatch = useDispatch();

 if(books.length === 1)
  books = "";
else
   {
    books = books.substring(1,books.length-1);
   }
   console.log(books);
  const drugArray = books.split(";");
  console.log(drugArray.length);

let fdarray = [];

var i = 0 ;
while (i < drugArray.length){
  fdarray.push(React.createElement(RLEntry, { drug: drugArray[i], key: i }));
    i++;
}
if(books !== "")
  return (
    <>
    <h1 className="mb-4">Reading List</h1>
    {fdarray}
</>
  );
  else return ( 
    <>
  <h1 className="mb-4">Reading List</h1> 
  <a className={sstyles.contact}>List is empty</a>
  </>
)
}
