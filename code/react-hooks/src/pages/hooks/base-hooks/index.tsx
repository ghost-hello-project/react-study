import { useState } from 'react'
import styles from './index.module.scss'
import { Card, Flex } from 'antd'

const CardContainer = ({ title }: { title: string }) => {
    const tabList = [
        {
            key: 'useState1',
            tab: 'useState1',
        },
        {
            key: 'useState2',
            tab: 'useState2',
        },
    ]

    const contentList: Record<string, React.ReactNode> = {
        useState1: <p>useState1</p>,
        useState2: <p>useState2</p>,
    }

    const [activeTabKey, setActiveTabKey] = useState<string>('useState1')

    const onActiveTabkeyChange = (key: string) => {
        setActiveTabKey(key)
    }

    return (
        <>
            <Card
                style={{ width: '100%' }}
                title={title}
                tabList={tabList}
                activeTabKey={activeTabKey}
                onTabChange={onActiveTabkeyChange}
            >
                {contentList[activeTabKey]}
            </Card>
        </>
    )
}

const BaseHooks = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles['title-box']}>
                    <h1 className={styles['title']}>基础 hooks</h1>
                </div>
                <Flex vertical>
                    <CardContainer title="useState" />
                </Flex>
            </div>
        </>
    )
}

export default BaseHooks
