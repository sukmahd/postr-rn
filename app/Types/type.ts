export interface FeedItem {
    id: string
    username: string
    date: string
    content: string
    comments: number
}

export interface CommentItem {
    id: string
    createdAt: string
    name: string
    comment: string
}