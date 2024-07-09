import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Programas = () => {
  const router = useRouter();

  // Arreglo de posts
  const posts = [
    {
      title: "Proteus 8.17",
      imagenURL: "https://3.bp.blogspot.com/-vIudlSKLRjk/WyJC3P55deI/AAAAAAAAAv0/20SWkmyPe24jKTF-wxR85FraIhWgJFRpQCLcBGAs/s1600/p8n.JPG"
    },
    {
      title: "Fritzing",
      imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGscIxhwP37VRw0DemUYDWG06CxUQqyVex_Q&s"
    },
    {
      title: "CadeSimu - PcSimu",
      imagenURL: "https://miescapedigital.com/wp-content/uploads/2020/07/Cade-Simu-el-mejor-programa-para-la-simulaci%C3%B3n-de-circuitos.jpg"
    },
  ];

  const handleDownload = () => {
    router.push('/proteus');
  };

  return (
    <Layout footer={false} title="My Blog" dark>
      <div className='container'>
        <div className='row'>
          {/* Mapeo de posts */}
          {posts.map((post, i) => (
            <div key={i} className='col-md-4 mb-4'>
              <div className='card text-center'>
                <div className='overflow'>
                  <img src={post.imagenURL} className='card-img-top' style={{ height: '200px' }} alt="Post" />
                </div>
                <div className='card-body'>
                  <h1 className='card-title'><strong>{post.title}</strong></h1>
                  <div className='d-flex justify-content-center'>
                    <button onClick={handleDownload} className='btn btn-primary'>
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Programas;
