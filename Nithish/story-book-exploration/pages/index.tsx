import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Input from '../components/InputField/Input';
import { useState } from 'react';

export default function Home() {
  const [InputVal, setInputVal] = useState("");
  return (
    <Input
      value={InputVal}
      onchange={setInputVal}
      borderColor="#CD113B"
      color="#FAF1E6"
      placeholder="Enter something"
    />
  )
}
