import type React from 'react'
import { Flex } from 'antd'
import { useNavigate } from 'react-router'
import { Button } from 'antd'

const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Flex gap="medium">
                <Button onClick={() => navigate('/about')}>关于</Button>
            </Flex>
        </>
    )
}

export default Home
