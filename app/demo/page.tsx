'use client';
import { JsonEditor } from '../ui/editors';

export default function Demo() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-4">
                        <select name="select" className="h-10 bg-[#2E2E2E] text-white px-4 rounded hover:bg-[#1E1E1E]">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                        <input 
                            type="text" 
                            placeholder="API Route" 
                            className="h-10 flex-grow bg-gray-200 text-black px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <button className="h-10 bg-[#2E2E2E] text-white px-4 rounded hover:bg-[#1E1E1E] flex items-center justify-center">RUN</button>
                    </div>
                    <JsonEditor height="70vh" onChange={(value: string) => console.log(value)}/>
                </div>
                <div className="flex flex-col">
                    <JsonEditor height="70vh"/>
                </div>
            </div>
        </div>
    );
};