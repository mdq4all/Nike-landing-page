interface shoe {
    thumbnail: string;
    bigShoe: string;
}
interface Props {
  imageURL:shoe
  changeBigShoeImage: (newShoe: string) => void;
  bigShoeImage: string;
}

const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImage }: Props) => {

  const handleClick = () => {
    if (bigShoeImage !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imageURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 hover:animate-heartbeat`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img
          src={imageURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
