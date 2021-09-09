import pino from "pino"
const logger = pino({
    prettryPrint: {
        ignore: 'pid, hostname'
    }
})

export { logger }
