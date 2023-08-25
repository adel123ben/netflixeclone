import { useState } from "react";
import FilmSec from "./testcomposent/FilmSec";
import MouviList from "./testcomposent/MouvieListe";
import Navbar from "./testcomposent/Navbar";
import InfoModel from "./testcomposent/InfoModel";
import useInfoModel from "./hooks/useinfoModel";

export default function Home() {

  const [favoriteMovies, setFavoriteMovies] = useState<string[]>([]);

  const addMovieToFavorites = (movieUrl: string) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movieUrl]);
  };

  const {isOpen, closeModel} = useInfoModel();

  return (
    <>
    <InfoModel visebel={isOpen} onclose={closeModel} />
      <Navbar />
      <FilmSec />
      <div className="pb-40">
      <MouviList title="For you"   />
      <div className="mt-10">
      <MouviList title="My liste"   />
      </div>
      
      </div>
      
    </>
  )
}
