import convert from './convert'

const time = {
    func: ( pattern, obj ) => {
        return convert(pattern, new Date(), obj)
    }
}

export default time.func