const NotFound = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <img className="w-96" src='/error.png' alt='error' />
            <h1 className="text-6xl">Oops! 404</h1>
            <h2 className="text-2xl">Page Not Found</h2>
            <p>This page doesn't exist or was removed!</p>
        </div>
    )
};

export default NotFound