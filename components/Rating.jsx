import { starIcon } from "@/data/icons";

const Rating = ({ rating }) => {
  return (
    <div className="w-fit h-fit py-2 pl-2 pr-4 rounded-full bg-zinc50 flex items-center gap-1.5">
      {starIcon}
      <p className="text-sm font-medium leading-[100%] whitespace-nowrap">
        {rating}
      </p>
    </div>
  );
};

export default Rating;
