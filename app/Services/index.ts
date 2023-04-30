import serviceManager from './api'
const BASE_URL = 'https://644b1df74bdbc0cc3a8b4cdf.mockapi.io/api/postr/'

export const postFeed = (data: any) => {
    return serviceManager(BASE_URL + 'news','POST', data)
}

export const getFeeds = (params: any) => {
    return serviceManager(BASE_URL + 'news' + params, 'GET')
}

export const getComment = (newsId: string, params: any) => {
    return serviceManager(BASE_URL + '/news/' + newsId + '/comments' + params, 'GET')
}

export const postComment = (newsId: string, data: any) => {
    return serviceManager('', 'POST', data)
}