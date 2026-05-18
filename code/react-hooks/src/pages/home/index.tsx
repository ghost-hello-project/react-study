import styles from './index.module.scss'
import type React from 'react'
import { Card, Flex } from 'antd'
import { Link } from 'react-router'
import { Button } from 'antd'

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles['title-box']}>
                    <h1 className={styles['title']}>react hooks</h1>
                </div>
                <Flex vertical>
                    <Card title="hooks">
                        <Link to="/hooks/base-hooks">
                            <Button>基础 hooks</Button>
                        </Link>
                    </Card>
                </Flex>
            </div>
        </>
    )
}

export default Home
