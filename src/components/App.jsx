import { useState, useEffect} from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Searchbar } from './Searchbar/Searchbar'
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader"
import { Wrapper } from "./App.styled";
import {Modal} from "./Modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
import {fetchImg} from '../services/api'
import 'react-toastify/dist/ReactToastify.css';


export function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [modalImg, setModalImg] = useState('');
  const [status, setStatus] = useState('idle');


useEffect(() => {
  let ignore = false;
  if(search === ''){
    setStatus('idle')
  }
    const btnFetch = async () => {
      try {
        setStatus('loading');
        const res = await fetchImg(search, page);
        if (res.data.total === 0) {
          throw new Error('Images not found');
        }
        if(!ignore){
          setGallery(prevState => [...prevState, ...getGalleryItems(res.data.hits)]);
          setStatus('finished');
        }
        
      } catch (error) {
              toast.error(error.message, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        setStatus('idle');
      }
    }
    if(!!search){
      btnFetch();
    }
  
  return () => {ignore = true}
},[search, page])

  const hadleSubmit = (value) => {
      setSearch(value.search);
      setGallery([]);
      setPage(1);
  }

  const toggleModal = (image) => {
    setModalImg(image)
  };

 const loadMore = () => {
   setPage(prevState => prevState + 1)
  }

  const getGalleryItems = (data) => {
    return data.map(el => ({
      id: el.id, webformatURL: el.webformatURL, largeImageURL: el.largeImageURL,
    }));
  };

  return (
    <Wrapper>
      <Searchbar onSubmit={hadleSubmit} />
      <ImageGallery images={gallery} onClick={toggleModal} />
      {status === 'loading' && <Loader />}
      {status === 'finished' && <Button loadMore={loadMore} />}
      {modalImg && <Modal image={modalImg} onModalClose={toggleModal} />}
      <ToastContainer />
    </Wrapper>
  )
}



