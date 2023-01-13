import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import "./Cat.scss";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cat = () => {
  const navigate = useNavigate();
  const cattId = useParams<{ catId?: string }>().catId;
  const catData = useAppSelector((state) =>
    state.cat.catsData.find((cat) => cat.id === cattId)
  );

  useEffect(() => {
    if (!catData) {
      navigate("/");
    }
  }, [catData]);

  return catData ? (
    <div className="SingleCat">
      <div className="catContainer">
        <img src={catData.url} />
        <div className="info">
          <p className="height">Height: {catData.height}</p>
          <p className="id">ID: {catData.id}</p>
          <p className="wiki">
            <a href={catData.breeds[0].wikipedia_url} target="_blank">
              Wikipedia
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cat;
