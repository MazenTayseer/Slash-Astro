import { useState } from "react";
import { FaStar } from "react-icons/fa6";

interface PriceRangeProp {
  id: string;
  label: string;
  checked: boolean;
}

interface RatingRangeProp {
  id: string;
  number: number;
  checked: boolean;
}

const Filters = () => {
  const colorLit = "text-yellow-400";
  const colorDim = "text-gray-300";

  const PriceRanges: PriceRangeProp[] = [
    { id: "PriceRange1", label: "EGP 0 - EGP 250", checked: false },
    { id: "PriceRange2", label: "EGP 250 - EGP 500", checked: false },
    { id: "PriceRange3", label: "EGP 500 - EGP 750", checked: false },
    { id: "PriceRange4", label: "EGP 1000 and up", checked: false },
  ];

  const RatingRanges: RatingRangeProp[] = [
    { id: "RatingRange1", number: 1, checked: false },
    { id: "RatingRange2", number: 2, checked: false },
    { id: "RatingRange3", number: 3, checked: false },
    { id: "RatingRange4", number: 4, checked: false },
    { id: "RatingRange5", number: 5, checked: false },
  ];

  const [priceRanges, setPriceRanges] = useState<PriceRangeProp[]>(PriceRanges);

  const handleSortByPriceChange = (id: string): void => {
    const updatedPriceRanges = priceRanges.map((range) =>
      range.id === id ? { ...range, checked: !range.checked } : range
    );
    setPriceRanges(updatedPriceRanges);
  };

  return (
    <div className='bg-customDark text-customWhite rounded-lg p-8 flex flex-col gap-8'>
      <div>
        <h5 className='font-semibold'>Shop By Price</h5>
        <div className='mt-4 flex flex-col gap-2'>
          {priceRanges.map((range) => (
            <label
              key={range.id}
              htmlFor={range.id}
              className='flex items-center'
            >
              <input
                type='checkbox'
                id={range.id}
                checked={range.checked}
                onChange={() => handleSortByPriceChange(range.id)}
                className='rounded cursor-pointer w-4 h-4 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
              />
              <span className='ml-2 text-sm font-medium text-customWhite'>
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h5 className='font-semibold'>Shop By Rating</h5>
        <div className='mt-4 flex flex-col gap-2'>
          {RatingRanges.map((range) => (
            <label
              key={range.id}
              htmlFor={range.id}
              className='flex items-center'
            >
              <input
                type='checkbox'
                id={range.id}
                checked={range.checked}
                onChange={() => handleSortByPriceChange(range.id)}
                className='rounded cursor-pointer w-4 h-4 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
              />
              <span className='ml-2 text-sm font-medium text-customWhite flex'>
                {[...Array(range.number)].map((_, i) => (
                  <FaStar key={i} className={`w-4 h-4 ${colorLit} `} />
                ))}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
