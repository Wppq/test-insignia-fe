import { CardActivity } from "./CardActivity";

export function ActivitySection() {
    return (
        <section className="p-4 rounded border-b-2 pb-2 mb-2">
            <h2 className="text-lg border-b-4 pb-2 font-bold">Activity</h2>
            <div className="mt-2">
                {[1, 2, 3, 4, 5].map(() => {
                    return (
                        <CardActivity />
                    )
                })}
            </div>
        </section>
    )
}