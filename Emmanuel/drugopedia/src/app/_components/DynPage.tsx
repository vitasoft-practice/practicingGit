'use client'

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PageButton from "./PageButton";
import LinkButton from "./LinkButton";
import parse from "html-react-parser";
import { selectIsLoggedIn, selectUser, selectToken, setUser , selectBooks, setBooks } from '../../lib/features/loginSlice';
import { of } from 'rxjs'
import { Subject } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { concatMap, takeUntil, tap } from "rxjs/operators";
import { ajax, AjaxConfig } from 'rxjs/ajax'
import { map, catchError, take } from 'rxjs/operators'

export const dynamic = 'force-dynamic'

export default function DynPage(props : any) {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  let did = "";
  let bookmarked = false;
  let notbookmarked = true;
  let notLoggedIn = !isLoggedIn;
  let user : any;
  let books = "";
  let url="";
  let token = "";
  const [requestId, setRequestId] = useState("")
  const [response, setResponse] = useState(null)

console.log("Logged in: " + isLoggedIn);

token = useSelector(selectToken);

console.log("using token: " + token);

if(isLoggedIn)
{
  books = useSelector(selectBooks);
  user = useSelector(selectUser);

  let index = books.indexOf(";" + props.p + ";");

  console.log("Bookmarks: " + books);
  console.log("Props: " + props.p);

  if(index !== -1) bookmarked = true;

  notbookmarked = !bookmarked;

  console.log("Bookmarked: " + bookmarked);
}
  if(props.p.length > 1) did = "2"
  else did = "1"

  url = "http://localhost:3001/drugs/" + props.p;
  const [data, setData] = useState({
    "message": "Drug found successfully",
    "existingDrug": {
        "_id": "66f91eaa04619da3a9d95f19",
        "name": "A",
        "html": "",
        "information": "",
        "tradenames": "",
        "indications": "",
        "contraindications": "",
        "dosage": "",
        "route": "",
        "warnings": "",
        "sideeffects": "",
        "precautions": "",
        "storage": "",
        "__v": 0
    }
});

  useEffect(() => {
    const subscription = fromFetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }})
      .pipe(
        tap(async (response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          else
          {
            setData(await response.json());
          }
        }),
        take(1)
      )
      .subscribe();
    return () => {
      subscription.unsubscribe();
    }
  }, [props.p]);

  if(did === "1")
  {

  const result = data.existingDrug.html.match(new RegExp("class=\"btn btn-link\" href=\"#\">" + "(.+?)" + "</a>", "g"));

const handleClick = (e : any) => {
  console.log(e.target.value);
  e.preventDefault();
};

  var drugArr = [];

let ename = "";
  if(result !== null)
  {
    console.log(result.length);
   for(let i=0;i<result.length;i++)
  {
    const str = result[i];

    const ddown = str.match(new RegExp("class=\"btn btn-link\" href=\"#\">" + "(.+?)" + "</a>"));
    if(ddown !== null)
  {
    ename = ddown[1];
    drugArr.push(React.createElement(LinkButton, { l: ename, key: i }));
}
  }
  }
  
  return (
    <>
  <h1 className="mb-4">List of drugs with name starting with {props.p}</h1>
  {drugArr}
  </>
  );

}
else
{
  //const dynNode = parse(data.html);
//<div dangerouslySetInnerHTML={{ __html: data.html }} />;

const dynInfo = parse(data.existingDrug.information);
const dynTradeNames = parse(data.existingDrug.tradenames);
const dynIndications = parse(data.existingDrug.indications);
const dynContraIndications = parse(data.existingDrug.contraindications);
const dynDosage = parse(data.existingDrug.dosage);
const dynRoute = parse(data.existingDrug.route);
const dynWarn = parse(data.existingDrug.warnings);
const dynSideEffects = parse(data.existingDrug.sideeffects);
const dynPrecautions = parse(data.existingDrug.precautions);
const dynStorage = parse(data.existingDrug.storage);

const handleClick = (e : any) => {

  if(isLoggedIn)
  {
    
  if(bookmarked)
  {
    console.log(books);
    books = books.replace(";" + props.p + ";", ";");
    console.log(books);
    dispatch(setBooks(books));
    bookmarked = false;
    notbookmarked = true;
  }
  else
  {
    console.log(books);    
    books = books + props.p + ";";
    console.log(books);
    dispatch(setBooks(books));
    bookmarked = true;
    notbookmarked = false;
  }
  
  let res;
  const postData = async()=>{
    res = await fetch("http://localhost:3001/auth/"+user.username,{
      method: "PUT",
      headers: {
        'Accept': 'application/json',
            'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "bookmarks": books })
    });
    console.log(res.status);
}
postData();
  }
  e.preventDefault();
};

  console.log(data.existingDrug.html);
    return (
      <>
      <h1 className="m-0 text-primary"><div hidden={notLoggedIn}><i hidden={notbookmarked} onClick={handleClick} className="fa-solid fa-bookmark me-3"></i><i hidden={bookmarked} onClick={handleClick} className="fa-regular fa-bookmark me-3"></i></div></h1>
      {dynInfo}
      {dynTradeNames}
      {dynIndications}
      {dynContraIndications}
      {dynDosage}
      {dynRoute}
      {dynWarn}
      {dynSideEffects}
      {dynPrecautions}
      {dynStorage}
      </>);
}

}