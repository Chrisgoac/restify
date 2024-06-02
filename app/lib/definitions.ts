export type User = {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};

export type ResponseData = {
    status: number;
    data: any;
    size: number;
    time: number;
};

export type ErrorResponse = {
    error: string;
}