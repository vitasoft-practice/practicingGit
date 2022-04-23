import { useState, useEffect } from 'react'

function Dashboard() {

  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)
  
    useEffect(() => {
        async function fetchDashboardData() {
        const response = await fetch('http://localhost:3002/dashboard')
        const data = await response.json()
        setDashboardData(data)
        setIsLoading(false)
        }
        fetchDashboardData()
    }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
      <li><h2>Posts - {dashboardData.posts}</h2></li>
      <li><h2>likes - {dashboardData.likes}</h2></li>
      <li><h2>Folower - {dashboardData.followers}</h2></li>
      <li><h2>Folowing - {dashboardData.following}</h2></li>
      
     </ul>
    </div>
  )
}

export default Dashboard