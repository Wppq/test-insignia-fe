export function CardActivity() {
    return (
        <div className="flex bg-gray-100/20 items-start space-x-4 my-2 hover:border-2 p-2 hover:cursor-pointer">
            <div className="bg-gray-300 rounded w-72 h-28 flex items-center justify-center">
                <p className="text-xl font-bold text-gray-800">Opa</p>
            </div>
            <div className="flex flex-col mb-2">
                <span className="font-semibold">John Stainor</span>
                <p className="mt-1">
                    commented: <span>"Well, I am liking it! How it captures the audio..."</span>
                </p>
                <div className="text-gray-400 text-sm">2 seconds ago</div>
            </div>
        </div>
    )
}