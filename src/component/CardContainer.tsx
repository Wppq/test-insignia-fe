import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Post } from "../models/post.mode";

interface CardContainerProps {
    posts: Post[];
    title: string
}
export function CardContainer({ posts,title }: CardContainerProps) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
    };

    return (
        <section className="rounded col-span-3">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-xl font-bold">{title}</h1>
                {/* Grid untuk tampilan desktop */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                        <img
                            src="https://image.kemenpora.go.id/images/content/2024/08/10/5252/8108Kemenpora-Sambut-Kepulangan-Lifter-Eko-Yuli-Irawan-Usai-Berjuang-di-Olimpiade-2024-Parissh.jpg"
                            alt="Kemenpora"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                            <h3 className="text-2xl font-bold">Explore Nature</h3>
                            <p>Discover the beauty of the natural world</p>
                        </div>
                    </div>
                    {posts.slice(1, 6).map((post) => (
                        <div key={post.id} className="relative overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                            <img src={`https://image.kemenpora.go.id/images/content/2024/08/10/5252/8108Kemenpora-Sambut-Kepulangan-Lifter-Eko-Yuli-Irawan-Usai-Berjuang-di-Olimpiade-2024-Parissh.jpg`} alt={post.title} className="object-cover h-64 w-full" />
                            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                                <h4 className="text-xl font-bold text-white">{post.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid untuk tampilan mobile dengan scroll tersembunyi */}
                <div className="slider-container md:hidden">
                    <Slider {...settings}>
                        {posts.map((post) => (
                            <div key={post.id} className="p-2">
                                <div className="bg-gray-300 h-64 p-4 relative">
                                    <img src={`https://image.kemenpora.go.id/images/content/2024/08/10/5252/8108Kemenpora-Sambut-Kepulangan-Lifter-Eko-Yuli-Irawan-Usai-Berjuang-di-Olimpiade-2024-Parissh.jpg`} alt={post.title} className="object-cover h-full w-full rounded" />
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
