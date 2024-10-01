'use client'

import Image from "next/image";
import styles from "./page.module.css";

import React, { useState, useEffect } from "react";
import { fromFetch } from "rxjs/fetch";
import { concatMap, takeUntil, tap } from "rxjs/operators";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { map, catchError, take } from 'rxjs/operators'

import LoginButton from "./_components/LoginButton";
import ReadingLink from "./_components/ReadingLink";
import ReadingPane from "./_components/ReadingPane";
import MenuEntry from "./_components/MenuEntry";
import MainIcon from "./_components/MainIcon";
import HomeLink from "./_components/HomeLink";

import { selectIsLoggedIn, selectUser, setToken } from '../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  var logbtext =  "Logout";

  if (!isLoggedIn) {
    logbtext =  "Login";
  }

  const url = "http://localhost:3001/auth/login"
  
  useEffect(() => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
          username: "guest",
          password: "guest"
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
    .then(res => res.json())
    .then(res => {dispatch(setToken(res.access_token)); console.log("token: " + res.access_token)});
  }, []);

const menuItem = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <MainIcon />
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <HomeLink />
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                      { menuItem.map((item)=><MenuEntry l={item} key={item} />) }
                    </div>
                </div>
                <ReadingLink />
            </div>
            <LoginButton />
        </div>
    </nav>
    
    <div className="container-fluid header bg-grey-100 p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
            <ReadingPane />
            <div className="col-lg-6">
                        <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
            </div>
        </div>
    </div>
    
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5">
        
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    </>
  );
}
