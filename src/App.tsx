import './App.css';
import { ActivitySection } from './component/ActivitySection';
import { ChannelSection } from './component/ChannelSection';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { CardContainer } from './component/CardContainer';
import { useFetch } from './hooks/useFetch';
import { Post } from './models/post.mode';

function App() {
  const { data: videos, error: errVideos, loading: loadVideos } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
  const { data: people, error: errPeople, loading: loadPeople } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
  const { data: documents, error: errDocuments, loading: loadDocuments } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
      {/* Desktop */}
      <main className='p-4 hidden md:block'>
        <Navbar />
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='flex-grow md:w-3/4'>
            <>
              <CardContainer
                posts={videos || []}
                title='Videos'
                loading={loadVideos}
                error={errVideos ? errVideos.message : null}
              />
              <CardContainer
                posts={people || []}
                title='People'
                loading={loadPeople}
                error={errPeople ? errPeople.message : null}
              />
              <CardContainer
                posts={documents || []}
                title='Document'
                loading={loadDocuments}
                error={errDocuments ? errDocuments.message : null}
              />
            </>
          </div>
          <div className='md:w-1/3 lg:w-1/4 mt-4 md:mt-0 md:ml-4'>
            <ActivitySection />
            <ChannelSection />
          </div>
        </div>
        <Footer />
      </main>

      {/* Mobile */}
      <main className='md:hidden'>
        <Navbar />
        <>
          <CardContainer
            posts={videos || []}
            title='Videos'
            loading={loadVideos}
            error={errVideos ? errVideos.message : null}
          />
          <ActivitySection />
          <CardContainer
            posts={people || []}
            title='People'
            loading={loadPeople}
            error={errPeople ? errPeople.message : null}
          />
          <ChannelSection />
          <CardContainer
            posts={documents || []}
            title='Document'
            loading={loadDocuments}
            error={errDocuments ? errDocuments.message : null}
          />
        </>
        <Footer />
      </main>
    </>
  );
}

export default App;
