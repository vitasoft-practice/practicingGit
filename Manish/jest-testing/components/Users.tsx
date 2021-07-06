import React from 'react'

const Users = ({ user }: any) => {
    return (
        <div>
           <h4 data-testid='userintro' >Hello, THis is {user.name},DOB {user.dob} and email Id {user.email}</h4> 
           
        </div>
        
    )
}

export default Users
