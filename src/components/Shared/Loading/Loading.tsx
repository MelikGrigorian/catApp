import "./Loading.scss";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Loading;
