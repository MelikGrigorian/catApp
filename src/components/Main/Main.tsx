import { useEffect, useState } from "react";
import { generatePath } from "react-router-dom";
import { getImagesByBreed } from "../../services";
import { ICatsData } from "../../store/slices/CatsSlice/types";
import { Card, Loading } from "../Shared";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCardInfo } from "../../store/slices/CatsSlice";
import "./Main.scss";

interface IMainProps {
  breedType?: string;
}

const Main: React.FC<IMainProps> = ({ breedType }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [catsData, setCatsData] = useState<ICatsData[] | null>(null);
  const catData = useAppSelector((state) => state.cat.catsData);

  useEffect(() => {
    if (breedType) {
      setIsLoading(true);
      getImagesByBreed(breedType)
        .then((res) => {
          dispatch(setCardInfo(res.data));

          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false);
        });
    }
  }, [breedType]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="Main">
      {catData ? (
        catData.map(({ id, height, url }) => (
          <Card
            key={id}
            id={id}
            height={height}
            imgUrl={url}
            onNavigate={() => navigate(`/cat/${id}`)}
          />
        ))
      ) : (
        <>
          <p>No Content</p>
          <p>Please Choose Any Category</p>
        </>
      )}
    </div>
  );
};

export default Main;
