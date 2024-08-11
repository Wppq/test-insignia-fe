import './App.css';
import { ActivitySection } from './component/ActivitySection';
import { ChannelSection } from './component/ChannelSection';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { CardContainer } from './component/CardContainer';
import { useEffect, useState } from 'react';
import { Post } from './models/post.mode';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* Desktop */}
      <main className='p-4 hidden md:block'>
        <Navbar />
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='flex-grow md:w-3/4'>
            <CardContainer posts={posts} title='Videos' />
            <CardContainer posts={posts} title='People' />
            <CardContainer posts={posts} title='Document' />
          </div>
          <div className='md:w-1/3 lg:w-2/3 mt-4 md:mt-0 md:ml-4'>
            <ActivitySection />
            <ChannelSection />
          </div>
        </div>
        <Footer />
      </main>
      {/* Mobile */}
      <main className='md:hidden'>
        <Navbar />
        <CardContainer posts={posts} title='Videos' />
        <ActivitySection />
        <CardContainer posts={posts} title='People' />
        <ChannelSection />
        <CardContainer posts={posts} title='Document' />
        <Footer />
      </main>
    </>
  );
}

export default App;
