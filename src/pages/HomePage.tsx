import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container flex justify-between gap-4 px-16 mt-16">
        <Link
          to="/ready-bids"
          className="border-2 border-black text-center w-40 h-10 flex justify-center items-center hover:border-blue-500"
        >
          הצאות מחיר מוכנות
        </Link>
        <div className="flex flex-col gap-4">
          <Link
            to="/bid-page"
            className="border-2 border-black text-center w-40 h-10 flex justify-center items-center hover:border-blue-500"
          >
            ליצור הצאת מחיר
          </Link>

          <Link
            to="/hotels"
            className="border-2 border-black text-center w-40 h-10 flex justify-center items-center  hover:border-blue-500"
          >
            להוסיף בתי מלון
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
