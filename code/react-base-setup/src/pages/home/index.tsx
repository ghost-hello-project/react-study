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
                    <h1 className={styles['title']}>react setup</h1>
                </div>
                <Flex vertical>
                    <Card title="这是一个示例卡片">
                        <Link to="/about">
                            <Button>关于</Button>
                        </Link>
                    </Card>
                </Flex>
            </div>
        </>
    )
}

export default Home
