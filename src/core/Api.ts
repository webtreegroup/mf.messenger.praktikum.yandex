enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

type Options = {
    method: METHOD
    data?: any
}

type OptionsWithoutMethod = Omit<Options, 'method'>

const API_BASE_PATH = 'http://ya-praktikum.tech/api/v2'

export class HTTPTransport {
    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.GET})
    }

    request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
        const {method, data} = options

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open(method, `${API_BASE_PATH}/${url}`)
            
            xhr.onload = function() {
                resolve(xhr)
            }

            xhr.onabort = reject
            xhr.onerror = reject
            xhr.ontimeout = reject
            
            if (method === METHOD.GET || !data) {
                xhr.send()
            } else {
                xhr.send(data)
            }
        })
    }
} 

export const HTTP = new HTTPTransport()