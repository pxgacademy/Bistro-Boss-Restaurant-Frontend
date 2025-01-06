import loadingImg from "../../assets/others/loader3.gif";

const Loading = () => {
  return (
    <section className="w-full h-[calc(100vh-312px)]  flex items-center justify-center">
      <img src={loadingImg} alt="" />
    </section>
  );
};

export default Loading;
