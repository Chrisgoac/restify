'use client';

import { useState } from 'react';
import { JsonEditor } from './ui/editors';
import { demoFetcher } from './lib/data';
import { ResponseData } from './lib/definitions';

export default function Demo() {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState<ResponseData>({ status: 0, data: {}, size: 0, time: 0 });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [inputType, setInputType] = useState('body');
    const [token, setToken] = useState('');

    const handleRunClick = async () => {
        setIsLoading(true);
        setIsError(false);
        setErrorMessage('');
        try {
            const res = await demoFetcher(url, method, body, token);
            if ('error' in res) {
                setIsError(true);
                setErrorMessage(res.error);
            } else {
                setResponse(res);
            }

        } catch (error) {
            console.error('Error al hacer la solicitud:', error);
        }
        setIsLoading(false);
    };
    
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-4">
                        <select
                            name="method"
                            className="h-10 bg-[#2E2E2E] text-white px-4 rounded hover:bg-[#1E1E1E]"
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                        <input
                            type="text"
                            placeholder="API Route"
                            className="h-10 flex-grow bg-gray-200 text-black px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            className="h-10 bg-[#2E2E2E] text-white px-4 rounded hover:bg-[#1E1E1E] flex items-center justify-center"
                            onClick={handleRunClick}
                        >
                            RUN
                        </button>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                        <button
                            className={`h-10 px-4 rounded ${inputType === 'body' ? 'bg-[#1E1E1E] text-white' : 'bg-gray-200 text-black'} hover:bg-[#1E1E1E] hover:text-white`}
                            onClick={() => setInputType('body')}
                        >
                            Body
                        </button>
                        <button
                            className={`h-10 px-4 rounded ${inputType === 'token' ? 'bg-[#1E1E1E] text-white' : 'bg-gray-200 text-black'} hover:bg-[#1E1E1E] hover:text-white`}
                            onClick={() => setInputType('token')}
                        >
                            Authentication Bearer Token
                        </button>
                    </div>
                    {inputType === 'body' ? (
                        <JsonEditor
                            height="70vh"
                            value={body}
                            onChange={(value: string) => setBody(value)}
                        />
                    ) : (
                        <textarea
                            placeholder="Bearer Token"
                            className="h-32 flex-grow bg-[#1E1E1E] text-white px-4 rounded border border-[#2E2E2E] focus:outline-none focus:border-black"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                        />
                    )}
                </div>
                <div className="flex flex-col">
                    {isLoading ? <div className="flex items-center justify-center">
                        <div className="h-10 bg-[#2E2E2E] mb-4 w-full text-white px-4 rounded flex items-center justify-center">
                            Loading...
                        </div>
                    </div> : 
                    <div className="flex items-center space-x-2 mb-4">
                        <div className='h-10 w-full bg-[#2E2E2E] text-white px-4 rounded flex items-center justify-center'>Status: {response.status}</div>
                        <div className='h-10 w-full bg-[#2E2E2E] text-white px-4 rounded flex items-center justify-center'>Size: {response.size} bytes</div>
                        <div className='h-10 w-full bg-[#2E2E2E] text-white px-4 rounded flex items-center justify-center'>Time: {response.time} ms</div>
                    </div> }
                    <div className="flex items-center space-x-2 mb-4">
                        <button
                            className={`h-10 px-4 rounded bg-[#1E1E1E] text-white hover:bg-[#1E1E1E] hover:text-white`}
                        >
                            Response
                        </button>
                    </div>
                    <JsonEditor
                        readonly
                        height="70vh"
                        value={isError ? errorMessage : JSON.stringify(response.data, null, 2)}
                    />
                </div>
            </div>
        </div>
    );
}
