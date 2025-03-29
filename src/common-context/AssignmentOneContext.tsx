/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, PropsWithChildren } from 'react'
import { AssignmentOne, AssignmentOneContext } from '../models'

export const AssignmentOneRelatedContext = createContext<AssignmentOneContext>({})

const initialState:AssignmentOne[] = []

type props = PropsWithChildren
const AssignmentOneRelatedReducer = (state:AssignmentOne[], action: { type: string; payload: AssignmentOne | AssignmentOne[] }) => {
    switch (action.type) {
    case 'GET_AssignmentOneRelated':
        return action.payload as AssignmentOne[]
    case 'ADD_AssignmentOneRelated':
        return [...state, action.payload as AssignmentOne]
    case 'DELETE_AssignmentOneRelated':
        // eslint-disable-next-line no-case-declarations
        const filterAssignmentOneRelated: AssignmentOne[] = state.filter((it) => it.name?.toString() !== (action.payload as AssignmentOne)?.name?.toString())
        return filterAssignmentOneRelated
    case 'Classify_AssignmentOneRelated':
        // eslint-disable-next-line no-case-declarations
        const convertData: AssignmentOne[] = state.map((it) => it.name?.toString() === (action.payload as AssignmentOne)?.name?.toString() ? { ...(action.payload as AssignmentOne) } : it)
        return convertData
    default:
        return state
    }
}

export const AssignmentOneRelatedProvider = (props: props) => {
    const [AssignmentOneRelatedState, AssignmentOneRelatedDispatch] = useReducer(AssignmentOneRelatedReducer, initialState)

    const GetAssignmentOneRelated = (payload: AssignmentOne[]) => {
        AssignmentOneRelatedDispatch({ type: 'GET_AssignmentOneRelated', payload })
    }

    const AddAssignmentOneRelated = (payload: AssignmentOne) => {
        AssignmentOneRelatedDispatch({ type: 'ADD_AssignmentOneRelated', payload })
    }

    const DeleteAssignmentOneRelated = (payload: AssignmentOne) => {
        AssignmentOneRelatedDispatch({ type: 'DELETE_AssignmentOneRelated', payload })
    }

    const ClassifyAssignmentOneRelated = (payload: AssignmentOne) => {
        AssignmentOneRelatedDispatch({ type: 'Classify_AssignmentOneRelated', payload })
    }

    return (
        <AssignmentOneRelatedContext.Provider value={{ AssignmentOneRelatedState, GetAssignmentOneRelated, AddAssignmentOneRelated, DeleteAssignmentOneRelated, ClassifyAssignmentOneRelated }}>
            {props.children}
        </AssignmentOneRelatedContext.Provider>
    )
}
