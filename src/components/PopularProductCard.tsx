import { star } from "../assets/icons";

interface Props {
  imgURL: string;
  name: string;
  price: string;
}
const PopularProductCard = ({ imgURL, name, price }: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={`image ${name}`} className="w-[280px] h=[280px] cursor-pointer hover:opacity-80 duration-300" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">4.8</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
