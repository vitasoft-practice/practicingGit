import { NextPage } from "next";
import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home </Link>
          <Link href="/login"> Login </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
