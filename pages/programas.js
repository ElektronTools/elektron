import Layout from '../components/Layout';
import { post } from '../profile';
import { useRouter } from 'next/router';

const PostCard = ({ post }) => {
  const router = useRouter();

  const handleDownload = () => {
    router.push('/proteus');
  };

  return (
    <div className='col-md-4'>
      <div className='card'>
        <div className='overflow'>
          <img src={post.imagenURL} className='card-img-top' alt="Post" />
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <div className='d-flex justify-content-center'>
            <button onClick={handleDownload} className='btn btn-primary'>
              Descargar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Programas = () => (
  <Layout footer={false} title="My Blog" dark>
    <div className='d-flex justify-content-center'>
      <div className='row'>
        {
          post.map((post, i) => (
            <PostCard post={post} key={i} />
          ))
        }
      </div>
    </div>
  </Layout>
);

export default Programas;
