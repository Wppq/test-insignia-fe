export function ChannelSection() {
    return (
        <aside className="p-4 rounded">
            <div className="flex border-b-2 pb-2 items-center justify-between">
                <h2 className="text-lg font-bold">Channels</h2>
                <span>Browse all channels</span>
            </div>
            <div className="mt-2">
                <div className="grid md:grid-cols-2 grid-cols-3 gap-4 mt-2">
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Google</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Dribbble</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Microsoft</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Behance</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Weather Channel</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Gurus</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">iMedia</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Creativeye</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Khan Studios</div>
                    <div className="bg-gray-200 w-full h-36 rounded p-2">Yahoo</div>
                </div>
            </div>
        </aside>
    )
}