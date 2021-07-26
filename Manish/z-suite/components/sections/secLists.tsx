import Image from 'next/image'
import zshop from '../../assets/z-group/icons/z-shop.png'
import zapp from '../../assets/z-group/icons/z-app.png'
import zpro from '../../assets/z-group/icons/z-pro.png'

export const secLists = [
    {
        id: 1,
        Img: <Image src={zshop} alt="Z Shop" width={50} height={50} />,
        title: "Z Shop",
        des: "Creating revenue streams"

    },
    {
        id: 2,
        Img: <Image src={zapp} alt="Z app" width={50} height={50} />,
        title: "Z App",
        des: "Improving patient retention and outcomes"

    },
    {
        id: 3,
        Img: <Image src={zpro} alt="Z pro" width={50} height={50} />,
        title: "Z Pro",
        des: "Marketing and growing your practice"

    },


]
