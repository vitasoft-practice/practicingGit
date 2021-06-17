

import { useRouter } from 'next/router'

const about = () => {
  const router = useRouter()
  const { aboutname } = router.query

  return <h2>About Name: {aboutname}</h2>
}

export default about