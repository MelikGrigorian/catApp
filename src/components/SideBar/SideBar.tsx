import { useState } from "react";
import { IBreeds } from "../../store/slices/CatsSlice/types";
import { useNavigate } from "react-router-dom";

import "./Sidebar.scss";

interface ISideBarProps {
  breeds: IBreeds[];
  breedType?: string;
}

const SideBar: React.FC<ISideBarProps> = ({ breeds, breedType }) => {
  const navigate = useNavigate();
  const [isVivsible, setIsVivsible] = useState<boolean>(true);

  return (
    <div className={isVivsible ? "SideBarOpen" : "SideBarClose"}>
      <button
        className="close"
        onClick={() => setIsVivsible((prev) => !prev)}
      />
      {!breeds.length
        ? "No Any Categroies"
        : breeds.map(({ id, name }) => (
            <button
              key={id}
              className={`breed ${breedType === id ? "active" : ""}`}
              onClick={() => navigate(`/${id}`)}
            >
              <p>{name}</p>
            </button>
          ))}
    </div>
  );
};

export default SideBar;
