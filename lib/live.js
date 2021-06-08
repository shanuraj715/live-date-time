import convert from './convert'


const timedate = {
    live: ( pattern = '', cb, obj) => {
        const s = convert( pattern, new Date(), obj );

        if( typeof cb === 'function' ){
            cb()
        }

        // Check the object parameter for more functionality
        if( obj.element && typeof obj.element === 'string' ){
            let e = document.getElementById(obj.element)
            // check if the eid was a valid element id
            if( e && typeof e === 'object' ){
                e.innerHTML = s
                return ''
            }
            else{
                console.error(`Invalid element Id or the element with id ${obj.element} not found on the DOM.\nYou passed an invalid element id in the live() function.`)
            }
        }
        return s
        
    }
}

export default timedate.live