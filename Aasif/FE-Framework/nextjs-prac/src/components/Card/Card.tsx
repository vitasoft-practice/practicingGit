import { CardType } from '@/constant'
import Link from 'next/link';
import React from 'react'
import styles from '@/app/page.module.scss'

const Card: React.FC<CardType> = ({ name, role, id }) => {
  return (
    <Link href={"/user/[id]"} as={`/user/${id}`} key={id} className={styles.card} >
      <div className={styles.card_content} >
        <h2 className={styles.name}>{name} </h2>
        < p > {role} </p>
      </div>
    </Link>
  );
};

export default Card;
