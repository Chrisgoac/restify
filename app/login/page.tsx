import Link from "next/link";

export default function Login() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <nav className="bg-gray-900 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-white text-lg font-bold">
                            Restify
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/login" className="text-white hover:text-gray-300 mr-4">
                            Login
                        </Link>
                        <Link href="/register" className="text-white hover:text-gray-300">
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="flex-1 container mx-auto flex flex-col justify-center items-center">
                <h1 className="text-5xl mb-8">Login</h1>
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
                    <button className="h-10 bg-[#2E2E2E] text-white px-4 rounded hover:bg-[#1E1E1E] flex items-center justify-center">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                        Login
                    </button>
                </form>
            </main>
            <footer className="bg-gray-900 py-4 text-center text-gray-400">
                <p>Built with <span className="text-red-500">&hearts;</span> by Chrisgoac</p>
            </footer>
        </div>
      );
}       