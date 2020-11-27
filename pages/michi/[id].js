import Layout from "../../components/Layout";
import data from '../../data/data'
import styles from '../../styles/styles.module.css'

export default function Michi({photo}) {

    return <Layout>
        <div className={styles.container}>
            <div>
                <img src={photo.path} className={styles.catPhoto}  alt={photo.name} />
            </div>
            <div className={styles.infoContainer}>
                <p><b>id:</b> {photo.id}</p>
                <p><b>name:</b> {photo.name}</p>
                <p><b>description: </b> {photo.description}</p>
            </div>

        </div>

    </Layout>

}


export async function getStaticPaths() {
    const paths =  data.map(cat=> {

        return {
            params:{
                id: cat.id+""
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const photo = data.find(cat=> cat.id=== +params.id)
    return {
        props: {
            photo
        }

    }
}