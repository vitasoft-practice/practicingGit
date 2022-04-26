import Image from 'next/image'
import imge from '../public/123.jpeg'


//image optimzation
const Fill = () => (
  <div>
    
    <h1>Image Component With Layout Fill</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image alt="Mountains" src={imge} layout="fill" objectFit="cover" />
    </div>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt="Mountains"
        src={imge}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div style={{ position: 'relative', width: '600px', height: '500px' }}>
      <Image
        alt="Mountains"
        src={imge}
        layout="fill"
        objectFit="none"
        quality={100}
      />
    </div>
  </div>
)

export default Fill