import Image from "next/image"
import imge from '../../public/images/123.jpeg'



const Form2=()=>{
    return (
<div>
<Image
                alt="Nature"
                src={imge}
                layout="responsive"
                objectFit="contain" 
                width={3000}
                height={2000}
                 />
    </div>
    )
}
export default Form2