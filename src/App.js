import { useState, useEffect } from "react";
import "./App.css";
import Button from "./component/Button/Button";
import ImageGallery from "./component/ImageGallery";
import Searchbar from "./component/Searchbar";
import api from "./services/imageApi";
import Loader from "react-loader-spinner";
import Modal from "./component/Modal/Modal";

export default function App() {
  const [arrayImages, setArrayImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchImage();
  }, [searchQuery]);

  const onSubmit = (text) => {
    setSearchQuery(text);
    setArrayImages([]);
    setCurrentPage(0);
  };

  const fetchImage = () => {
    setIsloading(true);
    api
      .fetchImage(searchQuery, currentPage)
      .then((array) => {
        if (array.length === 0) {
          return alert("Sorry, we didn't find pictures.Try again");
        }
        setArrayImages((prevState) => [...prevState, ...array]);
        setCurrentPage((prevState) => prevState + 1);
      })
      .then(() => {
        if (currentPage > 0) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again later");
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const toggleModal = () => {
    setModalOpen((prevState) => {
      return !prevState;
    });
  };

  const onModal = (obj) => {
    setCurrentImg(obj);
    toggleModal();
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {arrayImages.length > 0 && (
        <>
          <ImageGallery
            arrayImages={arrayImages}
            onClick={onModal}
            imgClick={onModal}
          />
          <Button text={"Load more"} func={fetchImage} />
        </>
      )}
      {isLoading && (
        <Loader
          className="Loader"
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
      {modalOpen && (
        <Modal obj={currentImg} onClose={toggleModal}>
          <img src={currentImg.largeImageURL} alt={currentImg.tags} />
        </Modal>
      )}
    </div>
  );
}
