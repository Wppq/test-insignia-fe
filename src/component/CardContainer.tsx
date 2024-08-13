import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Post } from "../models/post.mode";

interface CardContainerProps {
    posts: Post[];
    title: string;
    loading: boolean;
    error: string | null;
}

const Error = ({ message }: { message: string }) => (
    <div className="flex justify-center items-center h-64">
        <p className="text-red-600 text-lg font-semibold">{message}</p>
    </div>
);

export function CardContainer({ posts, title, loading, error }: CardContainerProps) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-xl font-bold">Loading...</h1>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                        <div className="animate-pulse w-full h-full bg-gray-400"></div>
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                            <div className="w-1/2 h-6 bg-gray-500 mb-2 animate-pulse"></div>
                            <div className="w-3/4 h-4 bg-gray-500 animate-pulse"></div>
                        </div>
                    </div>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="relative overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                            <div className="animate-pulse w-full h-64 bg-gray-400"></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                                <div className="w-3/4 h-4 bg-gray-500 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider-container md:hidden">
                    <Slider {...settings}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="p-2">
                                <div className="bg-gray-300 h-64 p-4 relative">
                                    <div className="animate-pulse w-full h-full bg-gray-400"></div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                                        <div className="w-3/4 h-6 bg-gray-500 animate-pulse"></div>
                                        <div className="w-3/4 h-4 bg-gray-500 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <section className="rounded col-span-3">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <Error message={error} />
                </div>
            </section>
        );
    }

    return (
        <section className="rounded col-span-3">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                        <img
                            src={"https://via.placeholder.com/600x400"}
                            alt={posts[0]?.title || "Placeholder"}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                            <h3 className="text-2xl font-bold">{posts[0]?.title || "Title"}</h3>
                            <p>{posts[0]?.body || "Description"}</p>
                        </div>
                    </div>
                    {posts.slice(1, 6).map((post) => (
                        <div key={post.id} className="relative overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                            <img src={"https://via.placeholder.com/400x400"} alt={post.title} className="object-cover h-64 w-full" />
                            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                                <h4 className="text-xl font-bold text-white">{post.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="slider-container md:hidden">
                    <Slider {...settings}>
                        {posts.map((post) => (
                            <div key={post.id} className="p-2">
                                <div className="bg-gray-300 h-64 p-4 relative">
                                    <img src={"https://via.placeholder.com/400x400"} alt={post.title} className="object-cover h-full w-full rounded" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                                        <h3 className="text-2xl font-bold text-white">{post.title}</h3>
                                        <p className="text-white">{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
