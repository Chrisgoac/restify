'use client';

import { useState } from 'react';
import { JsonEditor } from '../ui/editors';
import { demoFetcher } from '../lib/data';
import { ResponseData } from '../lib/definitions';

export default function Demo() {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState<ResponseData>({ status: 0, data: {} });

    const handleRunClick = async () => {
        try {
            const res = await demoFetcher(url, method, body);
            if ('error' in res) {
                console.error('Error al analizar el cuerpo JSON:', res.error);
            } else {
                setResponse(res as ResponseData);
            }
        } catch (error) {
            console.error('Error al hacer la solicitud:', error);
        }
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
                    <JsonEditor
                        height="70vh"
                        onChange={(value: string) => setBody(value)}
                    />
                </div>
                <div className="flex flex-col">
                    <div className='h-10 bg-[#2E2E2E] mb-4 text-white px-4 rounded flex items-center justify-center'>Status: {response.status}</div>
                    <JsonEditor
                        readonly
                        height="70vh"
                        value={JSON.stringify(response.data, null, 2)} // Pretty print the JSON response
                    />
                </div>
            </div>
        </div>
    );
}
