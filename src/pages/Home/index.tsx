import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";
import { Loading } from "../../components/Shared";
import SideBar from "../../components/SideBar/SideBar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBreedsByLimit } from "../../services";
import { setBreeds } from "../../store/slices/CatsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const params = useParams<{ breedId?: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const breeds = useAppSelector((state) => state.cat.breeds);

  useEffect(() => {
    if (!breeds.length) {
      setIsLoading(true);
      getBreedsByLimit()
        .then((res) => dispatch(setBreeds(res.data)))
        .catch((e) => {
          setIsLoading(false);
          console.log(e);
        });
    } else {
      setIsLoading(false);
    }
  }, [breeds, dispatch]);

  useEffect(() => {
    if (breeds.length && !params.breedId) {
      navigate(`/${breeds[0].id}`);
    }
  }, [breeds, params]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <SideBar breeds={breeds} breedType={params.breedId} />
      <Main breedType={params.breedId} />
    </div>
  );
};

export default Home;
