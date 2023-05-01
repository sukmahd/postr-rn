export interface FeedItem {
    id: string
    username: string
    createdAt: string
    content: string
    comments: number
}

export interface CommentItem {
    id: string
    createdAt: string
    name: string
    comment: string
}