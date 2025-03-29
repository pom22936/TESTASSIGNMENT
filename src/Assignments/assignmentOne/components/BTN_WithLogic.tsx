import React, { useContext, useEffect } from 'react';
import { Button } from 'antd';
import { AssignmentOne, AssignmentOneContext } from '../../../models';
import { AssignmentOneRelatedContext } from '../../../common-context/AssignmentOneContext';

interface Params {
    data: AssignmentOne
    isCountdown: boolean
}

type Props = Params
const BTN_WithLogic: React.FC<Props> = (props: Props) => {
    const { data, isCountdown } = props
    const { ClassifyAssignmentOneRelated } = useContext<AssignmentOneContext>(AssignmentOneRelatedContext)

    useEffect(() => {
        if (isCountdown) {
            const timeoutId = setTimeout(() => {
            handleCleckDelete()
            }, 5000);
          // Cleanup function to clear the timeout if the component unmounts
            return () => clearTimeout(timeoutId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleCleckDelete = () => {
        if (ClassifyAssignmentOneRelated) {
            data.isClassify = !data.isClassify
            ClassifyAssignmentOneRelated(data)
        }
    }

    return (
        <Button type="primary" onClick={handleCleckDelete}>{data.name}</Button>
    )
}

export default BTN_WithLogic