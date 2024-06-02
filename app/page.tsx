import Link from "next/link";

export default function Home() {
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
                <h1 className="text-5xl mb-8">Welcome to Restify</h1>
                <p className="text-xl text-center mb-8">
                    Restify is a powerful tool for making HTTP requests and visualizing responses.
                    Try our demo to see it in action!
                </p>
                <Link href="/demo" className="bg-gray-900 hover:bg-gray-800 text-white py-4 px-8 rounded-lg text-xl transition duration-300">
                    Try our demo
                </Link>
            </main>
            <footer className="bg-gray-900 py-4 text-center text-gray-400">
                <p>Built with <span className="text-red-500">&hearts;</span> by Chrisgoac</p>
            </footer>
        </div>
    );
}
