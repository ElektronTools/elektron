import Layout from '../components/Layout';
import { post } from '../profile';
import { useRouter } from 'next/router';

const PostCard = ({ post }) => {
  const router = useRouter();

  const handleDownload = () => {
    router.push('/proteus');
  };

  return (
    <div className='col-md-6 d-flex justify-content-center'>
      <div className='card text-center'>
        <div className='overflow'>
          <img src={post.imagenURL} className='card-img-top' alt="Post" />
        </div>
        <div className='card-body'>
          <h1 className='card-title'>{post.title}</h1>
          <p className='card-text'>{post.content}</p>
          <div className='d-flex justify-content-center'>
            <button onClick={handleDownload} className='btn btn-warning'>
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
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className='row'>
          {
            post.map((post, i) => (
              <PostCard post={post} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  </Layout>
);

export default Programas;
