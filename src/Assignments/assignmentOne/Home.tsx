import React, { useContext, useMemo } from 'react';
import { Table } from 'antd';
import { AssignmentOne, AssignmentOneContext } from '../../models';
import { AssignmentOneRelatedContext } from '../../common-context/AssignmentOneContext';
import BTN_WithLogic from './components/BTN_WithLogic';

const data: AssignmentOne[] =  [
    {
        type: 'Fruit',
        name: 'Apple',
    },
    {
        type: 'Vegetable',
        name: 'Broccoli',
    },
    {
        type: 'Vegetable',
        name: 'Mushroom',
    },
    {
        type: 'Fruit',
        name: 'Banana',
    },
    {
        type: 'Vegetable',
        name: 'Tomato',
    },
    {
        type: 'Fruit',
        name: 'Orange',
    },
    {
        type: 'Fruit',
        name: 'Mango',
    },
    {
        type: 'Fruit',
        name: 'Pineapple',
    },
    {
        type: 'Vegetable',
        name: 'Cucumber',
    },
    {
        type: 'Fruit',
        name: 'Watermelon',
    },
    {
        type: 'Vegetable',
        name: 'Carrot',
    },
]

const Home: React.FC = () => {
    const { AssignmentOneRelatedState, GetAssignmentOneRelated } = useContext<AssignmentOneContext>(AssignmentOneRelatedContext)
    
    useMemo(() => {
        if (GetAssignmentOneRelated) {
            const convertData = data.map((item) => { return { ...item, isClassify: false } })
            GetAssignmentOneRelated(convertData)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const columns = [
        {
            title: 'Original',
            dataIndex: '',
            key: '',
            render: (_data: string, row: AssignmentOne) => (
                <div>
                    {row.isClassify === false ? <BTN_WithLogic data={row} isCountdown={false}/> : null}
                </div>
            ),
        },
        {
            title: 'Fruit',
            dataIndex: '',
            key: '',
            render: (_data: string, row: AssignmentOne) => (
                <div>
                    {row.isClassify === true && row.type === 'Fruit' ? <BTN_WithLogic data={row} isCountdown={true}/> : null}
                </div>
            ),
        },
        {
            title: 'Vegetable',
            dataIndex: '',
            key: '',
            render: (_data: string, row: AssignmentOne) => (
                <div>
                    {row.isClassify === true && row.type === 'Vegetable' ? <BTN_WithLogic data={row} isCountdown={true}/> : null}
                </div>
            ),
        },
    ];
    
    return (
        <Table<AssignmentOne> 
            columns={columns} 
            dataSource={AssignmentOneRelatedState} 
            rowKey={'name'} 
            pagination={{
                pageSize: 20,
        }}/>
    )
}

export default Home