import axios from 'axios'

const serviceManager = async (url: string, method: string, data?: any, headers?:any) => {
    let defaultHeader = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    let config = {
        method,
        url,
        headers: headers ?? defaultHeader,
        data,
        timeout: 15000
    }

    try {
        const res = await axios(config)
        return res
    } catch ({response}) {
        if(response.status === 500) {
            //add alert to show error later
        }
        throw response
    }
}

export default serviceManager
