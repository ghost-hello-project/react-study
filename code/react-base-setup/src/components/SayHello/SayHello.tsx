import styles from '@/components/SayHello/SayHello.module.scss'
import logger from '@/utils/logger'
function SayHello() {
    const say = () => {
        logger.error('hello react')
        logger.warn('hello react')
        logger.info('hello react')
        logger.debug('hello react')
    }
    return (
        <>
            <section className={styles.msg}>hello react</section>
            <br />
            <button onClick={say}>hello</button>
        </>
    )
}

export default SayHello
