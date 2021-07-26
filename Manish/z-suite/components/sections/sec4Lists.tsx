import Image from 'next/image'
import img1 from '../../assets/section4/001-hook.png'
import img2 from '../../assets/section4/002-speech-bubble.png'
import img3 from '../../assets/section4/003-medical.png'
import img4 from '../../assets/section4/004-puzzle.png'
import img5 from '../../assets/section4/005-online.png'
import img6 from '../../assets/section4/006-template.png'

export const lists = [
    {
        id: 1,
        Img: <Image src={img1} alt="icons" width={50} height={50} />,
        des: "Grow your practice with technology solutions"
    
    },
    {
        id: 2,
        Img: <Image src={img2} alt="icons" width={50} height={50} />,
        des: "Developed with healthcare providers in mind"

    },
    {
        id: 3,
        Img: <Image src={img3} alt="icons" width={50} height={50} />,
        des: "E-commerce platform design for healthcare practices"

    },
    {
        id: 4,
        Img: <Image src={img4} alt="icons" width={50} height={50} />,
        des: "Easy-to-use apps and software"

    },
    {
        id: 5,
        Img: <Image src={img5} alt="icons" width={50} height={50} />,
        des: "Increase patient retention"

    },
    {
        id: 6,
        Img: <Image src={img6} alt="icons" width={50} height={50} />,
        des: "Premium marketing services to keep you growing "

    },
]