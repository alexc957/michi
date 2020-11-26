import Head from 'next/head'
import Layout from '../components/Layout'
import Photo from '../components/Photo';
import photos from '../data/data';
import Image from 'next/image'
import styles from '../components/layout.module.css';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
     <div className={styles.container}>
       {photos.map(photo=><img src={photo.path} key={photo.id}  width={400} height={300}  className={styles.photo} />)}

     </div>
     
    </Layout>
  )
}
