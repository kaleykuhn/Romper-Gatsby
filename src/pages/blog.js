import React from "react";
import Layout from "../components/layout";
import styles from "../components/blog.module.css";
const blog = () => {
   return (
      <Layout>
         <div className={styles.page}>
            <h1>this is a blog page</h1>
            <p className={styles.text}>
               Lorum is Lorum is Lorum is Lorum is Lorum is Lorum is Lorum is
               Lorum is Lorum is Lorum is Lorum is Lorum is Lorum is Lorum is
               Lorum is Lorum is Lorum is Lorum is Lorum is Lorum is Lorum is
               Lorum is Lorum is Lorum is Lorum is
            </p>
         </div>
      </Layout>
   );
};

export default blog;
