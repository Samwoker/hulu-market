
interface Props{
    image:string;
    hoverImage:string;
}

const CardRow = ({image,hoverImage}:Props) => {
  return (
    <div>
    <div className="relative group w-80 h-120 cursor-pointer overflow-hidden rounded-2xl shadow-lg">
        <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-100 group-hover:opacity-85"
        style={{ backgroundImage: `url(${image})` }}
      />
       <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundImage: `url(${hoverImage})` }}
      />
    </div>
    </div>
  )
}

export default CardRow