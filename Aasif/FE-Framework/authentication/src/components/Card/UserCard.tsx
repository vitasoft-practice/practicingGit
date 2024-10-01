import { CardType, UserT } from '@/constant'
import Link from 'next/link';
import React from 'react'
import styles from '@/app/page.module.scss'

const UserCard: React.FC<UserT> = ({ first_name, email, _id }) => {
  return (
    <Link href={"/"} key={_id} className={styles.card} >
      <div className={styles.card_content} >
        <h2 className={styles.name}>{first_name} </h2>
        < p > {email} </p>
      </div>
    </Link>
  );
};

export default UserCard;
