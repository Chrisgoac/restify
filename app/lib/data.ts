import { ResponseData } from './definitions';
import { ErrorResponse } from './definitions';

export async function demoFetcher(url: string, method: string, body: string, token: string): Promise<ResponseData | ErrorResponse> {
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
        },
    };
  
    if (method !== 'GET') {
        options.body = body;
    }

    const startTime = performance.now();

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        const endTime = performance.now();
        const time = endTime - startTime;
        const size = JSON.stringify(data).length;
        return <ResponseData>{
            status: res.status,
            data: data,
            size: size,
            time: time
        };
    } catch (err: any) {
        const errorResponse: ErrorResponse = { error: err.message };
        return errorResponse;
    }
}