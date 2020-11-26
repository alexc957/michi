import Image from 'next/image'
export  default function Photo({path}) {

    return (<div className="photo">
        
               <Image src={path} width={400} height={300}  className="photo"/>
            </div>)
}