

type PetCardProps = {
  name: string;
  type: string;
  image: string;
};

const PetCard = ({ name, type, image }: PetCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer">
      <div className="w-full h-40 overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full object-cover "
        />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-500 text-sm">{type}</p>
    </div>
  );
};

export default PetCard;
