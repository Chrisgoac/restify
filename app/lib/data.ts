import { ResponseData } from './definitions';
import { ErrorResponse } from './definitions';

export async function demoFetcher(url: string, method: string, body: string) {
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    };
  
    if (method !== 'GET') {
        options.body = body;
    }
  
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return <ResponseData>{
            status: res.status,
            data: data
        };
    } catch (err: any) {
        const errorResponse: ErrorResponse = { error: err.message };
        return errorResponse;
    }
}