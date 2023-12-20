import { FaStar } from "react-icons/fa6";

type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  category: string;
};

const ProductCard = ({
  id,
  name,
  price,
  image,
  rating,
  description,
  category,
}: ProductCardProps) => {
  const renderStars = (rating: number, colorLit: string, colorDim: string) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className={`w-4 h-4 ${colorLit}`} />);
      } else {
        stars.push(<FaStar key={i} className={`w-4 h-4 ${colorDim}`} />);
      }
    }
    return stars;
  };

  return (
    <div className='w-full max-w-sm bg-customDark rounded-lg' key={id}>
      <a href='#'>
        <img className='p-8 w-full h-60' src={image} alt={name} />
      </a>
      <div className='px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl font-semibold tracking-tight text-customWhite'>
            {name}{" "}
            <span className='text-lg font-medium ml-2 text-customGray'>
              {category}
            </span>
          </h5>
        </a>
        <div className='text-customGray'>{description}</div>

        <div className='flex items-center mt-2.5 mb-5'>
          <div className='flex items-center space-x-1'>
            {renderStars(rating, "text-yellow-400", "text-gray-300")}
          </div>

          <span className='text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3'>
            {rating}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold text-gray-900 dark:text-white'>
            {price}EGP
          </span>
          <a
            href='#'
            className='text-customMain bg-customLime font-bold rounded-lg text-sm px-3 py-2 text-center lime_btn_hover'
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
