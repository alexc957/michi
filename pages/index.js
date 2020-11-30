import Head from 'next/head'
import Layout from '../components/Layout'
import Photo from '../components/Photo';
import photos from '../data/data';
import Image from 'next/image'
import styles from '../styles/styles.module.css';
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom'
import CatItem from '../components/CatItem';
export default function Home({catPhotos}) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
     <div className={styles.container}>
       {catPhotos.map(photo=> <CatItem  key={photo.id} id={photo.id} path={photo.path} />)}

     </div>
     
    </Layout>
  )
}

export async function getStaticProps(){
  return {
    props: {
      catPhotos:photos
    }
  }
}

