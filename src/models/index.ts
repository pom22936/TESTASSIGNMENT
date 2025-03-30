import { User } from "../Assignments/assignmentTwo/models"
export interface AssignmentOne {
    type: string
    name: string
    isClassify?: boolean
}
export interface AssignmentOneContext {
    AssignmentOneRelatedState?: AssignmentOne[]
    GetAssignmentOneRelated?: (payload: AssignmentOne[]) => void
    AddAssignmentOneRelated?: (payload: AssignmentOne) => void
    DeleteAssignmentOneRelated?: (payload: AssignmentOne) => void
    ClassifyAssignmentOneRelated?: (payload: AssignmentOne) => void
}
export interface AssignmentTwoRequest {
    users: User[]
}

export interface AssignmentTwoResponse {
    [department: string]: {
        male: number
        female: number
        ageRange: string
        hair: Record<string, number>;
        addressUser: Record<string, string>;
    }
}
