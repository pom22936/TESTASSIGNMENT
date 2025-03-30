import React, { useMemo, useState } from 'react'
import axios from 'axios'
import { AssignmentTwoRequest, AssignmentTwoResponse } from '../../models'
import { transformUserData } from './common-misc'


const HomeTest2 = () =>  {
    const [data, setResult] = useState<AssignmentTwoResponse>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useMemo(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<AssignmentTwoRequest>('https://dummyjson.com/users')

                const dataResult = transformUserData(response.data.users)
                setResult(dataResult)
            } catch (err) {
                setError(axios.isAxiosError(err) ? err.message : 'An unknown error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
        <h1>Department Summary</h1>
        {data && (
            <div>
            {Object.entries(data).map(([department, details]) => (
                <div key={department} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                <h2>{department}</h2>
                <p> Male: {details.male} | Female: {details.female}</p>
                <p> Age Range: {details.ageRange}</p>
                <h4> Hair Colors:</h4>
                <ul>
                    {Object.entries(details.hair).map(([color, count]) => (
                    <li key={color}>{color}: {count}</li>
                    ))}
                </ul>
                <h4> Address Users:</h4>
                <ul>
                    {Object.entries(details.addressUser).map(([name, postalCode]) => (
                    <li key={name}>{name} - {postalCode}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
            )}
        </div>
    );
}

export default HomeTest2