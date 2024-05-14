const Error = () => {
    return (
        <>
            <div className="bg-gray-700">
                <h1 className="text-white text-3xl font-sans font-bold mx-6 py-2 ">Server Error</h1>
            </div>
            <div className="bg-gray-200 container border border-black w-[90%] m-auto mt-3">
                <h1 className="text-red-600 text-xl font-bold">404 - File or directory not found.</h1>
                <p className="font-bold">The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            </div>
        </>
    )
};

export default Error;