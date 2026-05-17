import { format } from 'date-fns'
import log from 'loglevel'
import prefix from 'loglevel-plugin-prefix'

// 注册插件
prefix.reg(log)

// 配置日志前缀
prefix.apply(log, {
    template: '[%t] %l:',
    timestampFormatter: (date) => {
        return format(date, 'yyyy-MM-dd HH:mm:ss.SSS')
    },
    levelFormatter: (level) => level.toUpperCase(),
    nameFormatter: () => '',
})

// 根据环境设置日志级别
const setupLogger = () => {
    const env = import.meta.env.VITE_ENV || import.meta.env.MODE

    if (env === 'development') {
        log.setLevel(log.levels.DEBUG, true)
    } else {
        log.setLevel(log.levels.ERROR)
    }
}

setupLogger()

export const logger = log
export default logger
