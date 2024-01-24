import React from 'react'

import styles from "css/forum/PetpetForum.module.css"
import Link from 'next/link'
export default function Petpetform() {
  return (
    <>
        <div className={styles.forum}>
            <Link href="/forum" className={styles.forumLink}>
              <img className={styles.image} src={`/images/forum/index_forum.png`}></img>
            </Link>
        </div>

    </>
  )
}
