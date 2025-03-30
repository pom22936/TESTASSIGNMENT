import { AssignmentTwoResponse } from "../../../models"
import { User } from "../models"

export function transformUserData(users: User[]): AssignmentTwoResponse {
    const departmentData: AssignmentTwoResponse = {}

    users.forEach((user) => {
        const department = user.company.department

        if (!departmentData[department]) {
            departmentData[department] = {
                male: 0,
                female: 0,
                ageRange: '0-0',
                hair: {},
                addressUser: {},
            }
        }

        if (user.gender === 'male') { 
            departmentData[department].male++
        } else if (user.gender === 'female') { 
            departmentData[department].female++
        }

        const age = user.age
        const currentAgeRange = departmentData[department].ageRange.split('-').map(Number)
        let minAge = currentAgeRange[0] || age
        let maxAge = currentAgeRange[1] || age

        minAge = Math.min(minAge, age)
        maxAge = Math.max(maxAge, age)
        departmentData[department].ageRange = `${minAge}-${maxAge}`

        const hairColor = user.hair.color
        departmentData[department].hair[hairColor] = (departmentData[department].hair[hairColor] || 0) + 1;

        (departmentData[department].addressUser as Record<string, string>)[`${user.firstName}${user.lastName}`] = user.address.postalCode
    })

    return departmentData
}
