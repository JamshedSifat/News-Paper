import { CiBookmark } from "react-icons/ci";
import { FaRegEye, FaStar, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  return (
    <div className="card bg-base-100 shadow-lg rounded-2xl overflow-hidden transition hover:shadow-xl">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 bg-base-200 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <button className="btn btn-ghost btn-sm text-gray-500 hover:text-primary">
            <CiBookmark className="text-lg" />
          <FaShareAlt className="text-lg" />
          
        </button>
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-52 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="font-bold text-lg hover:text-primary transition">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">
          {details.length > 180 ? details.slice(0, 180) + "..." : details}
        </p>
        <button className="text-primary font-semibold hover:underline">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="flex items-center gap-1 text-orange-400">
          <FaStar />
          <span className="font-medium text-sm">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
