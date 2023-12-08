export interface UserPicture {
    small: string;
    thumbnail: string;
    medium_mobile: string;
    medium: string;
    large: string;
    "320wx320h": string;
    extra_large: string;
    "640wx640h": string;
}

export interface User {
    key: string;
    url: string;
    name: string;
    username: string;
    pictures: UserPicture;
}

export interface Paging {
    next: string;
    previous: string;
}

export interface FollowingResponse {
    data: User[];
    paging: Paging;
}
