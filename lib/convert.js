const convert  = {
    func: (pattern = '', timestamp, obj) => {
        if( typeof obj !== 'object' ){
            obj = {}
        }
        if( obj.twoDigitTime === undefined ){
            obj.twoDigitTime = true
        }
        if( obj.twoDigitDate === undefined ){
            obj.twoDigitDate = true
        }
        if( typeof timestamp === 'string' ){
            String.prototype.isNumber = function(){return /^\d+$/.test(this)}
            if( !timestamp.isNumber() ){
                console.error("Invalid timestamp. Timestamp must have only numeric values.")
            }
            else{
                timestamp = new Date(parseInt(timestamp))
            }
        }
        if( pattern !== '' ){
            let pattern_arr = pattern.split('')
            const dt = timestamp
            if( dt.getTime() <= 0 ){
                return ''
            }
            let str = ''
            /**
             * Y => Full Year // 1996
             * y => Last Two digit of the year // 96
             * M => Full Month Name // June
             * m => Short Month Name // Jun
             * n => Month in Integer // January = 1, December = 12
             * D => Full Day Name // Monday
             * d => Short Day Name // Mon
             * x => Date in Integer // 31
             * H => 24 Hour format // 23
             * h => 12 Hour format // 12
             * i => Minutes in Integer // 59
             * s => Seconds in Integer // 48
             * a => am or pm
             * A => AM or PM
             * k => milliseconds
             * else => saperator
             */
            pattern_arr.map( i => {
                if(i === 'Y' ){
                    str += dt.getFullYear()
                }
                else if( i === 'y' ){
                    str += dt.getFullYear() % 100
                }
                else if( i === 'M' ){
                    const m = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                    str += m[dt.getMonth()]
                }
                else if( i === 'm' ){
                    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    str += m[dt.getMonth()]
                }
                else if( i === 'n' ){
                    let m = dt.getMonth() + 1
                    str += obj.twoDigitDate ? m < 10 ? '0' + m : m : m
                }
                else if( i === 'D' ){
                    const d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                    str += d[dt.getDay()]
                }
                else if( i === 'd' ){
                    const d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                    str += d[dt.getDay()]        
                }
                else if( i === 'x' ){
                    let d = dt.getDate()
                    str += obj.twoDigitDate ? d < 10 ? '0' + d : d : d
                }
                else if( i === 'H' ){
                    let h = dt.getHours()
                    str += obj.twoDigitTime ? h < 10 ? '0' + h : h : h
                }
                else if( i === 'h' ){
                    let h = dt.getHours()
                    let hr= h > 12 ?h - 12 : h
                    str += obj.twoDigitTime ? hr < 10 ? '0' + hr : hr : hr
                }
                else if( i === 'i' ){
                    let m = dt.getMinutes()
                    str += obj.twoDigitTime ? m < 10 ? '0' + m : m : m
                }
                else if( i === 's' ){
                    let s = dt.getSeconds()
                    str += obj.twoDigitTime ? s < 10 ? '0' + s : s : s
                }
                else if( i === 'a' ){
                    str += dt.getHours() >= 12 ? 'pm' : 'am'
                }
                else if( i === 'A' ){
                    str += dt.getHours() >= 12 ? "PM" : "AM"
                }
                else if( i === 'k' ){
                    let m = dt.getMilliseconds()
                    str += obj.twoDigitTime ? m < 10 ? '0' + m : m : m
                }
                else{
                    str += i
                }
                return ''
            })
            return str
        }
        return ''
    }
}

export default convert.func