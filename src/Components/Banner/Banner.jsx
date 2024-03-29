import { Link } from "react-router-dom";


const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200 px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 ">
            <img
              src="https://i.postimg.cc/YCCY1Fd2/book1.png"
              className="w-full h-[500px] p-10 "
            />
          </div>
          <div className="flex-1 *:my-5">
            <h1 className="text-6xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <Link to="/listed" className="btn bg-green-500">
              View The List
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;