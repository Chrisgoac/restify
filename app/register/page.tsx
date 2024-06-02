export default function Register() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl mb-8">Register</h1>
                <p className="text-xl text-center mb-8">
                    Create an account to access the demo.
                </p>
                <form className="flex flex-col justify-center items-center">
                    <input
                        type="text"
                        placeholder="Username"
                        className="h-10 bg-[#2E2E2E] text-white px-4 rounded border border-[#2E2E2E] focus:outline-none focus:border-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="h-10 bg-[#2E2E2E] text-white px-4 rounded border border-[#2E2E2E] focus:outline-none focus:border-black"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="h-10 bg-[#2E2E2E] text-white px-4 rounded border border-[#2E2E2E] focus:outline-none focus:border-black"
                    />                    
                    <button className="h-10 bg-[#2E2E2E] text-white px-4 rounded hover:bg-[#1E1E1E] flex items-center justify-center">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}   