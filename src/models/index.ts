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