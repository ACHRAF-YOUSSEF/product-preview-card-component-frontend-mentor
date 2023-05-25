interface CardProps {
  mobile_image: string;
  image: string;
  type: string;
  title: string;
  description: string;
  price: number;
  discounted_price: number;
  btn_label: string;
  btn_image: string;
  btn_color: string;
  hover_btn_color: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  mobile_image,
  image,
  type,
  title,
  description,
  price,
  discounted_price,
  btn_label,
  btn_image,
  btn_color,
  hover_btn_color,
  onClick
}) => {
  return (
    <div
      className="
        
        flex
        flex-col
        sm:flex-row
        justify-content
        items-center
        h-fit
        w-fit   
        rounded-xl
        bg-white 
        max-w-xl
      ">
      {/* left/top part */}
      <div
        className="
          flex-1 
          w-full 
          h-full
        ">
        <img
          className={`
            w-full 
            h-full 
            sm:rounded-l-xl 
            rounded-t-xl
            block 
            mx-auto
          `}
          src={mobile_image}
          srcSet={`${mobile_image} 375w, ${image} 1440w`}
          alt="article"
        />
      </div>
      {/* right/bottom part */}
      <div
        className="
          flex-1
          flex 
          flex-col 
          justify-center 
          items-start 
          px-8
          space-y-4
          py-6
        ">
        <div
          className="
            flex 
            flex-col 
            justify-start 
            items-start
            w-full
          ">
          <h3
            className="
            uppercase
            text-Dark-grayish-blue
          ">
            {type}
          </h3>
        </div>
        <div
          className="
            flex
            flex-col
            justify-start
            items-center
            w-full
          ">
          <h1
            className="
            text-bold
            text-4xl
            text-Very-dark-blue
          ">
            {title}
          </h1>
        </div>
        <div
          className="
            flex 
            flex-col 
            justify-start 
            items-center 
            w-full
          ">
          <p
            className="
            text-Dark-grayish-blue
          ">
            {description}
          </p>
        </div>
        <div
          className="
            flex 
            flex-row 
            justify-start 
            items-center 
            w-full
            space-x-4
            py-42
          ">
          <span
            className="
              text-Dark-cyan
              text-3xl
            ">
            ${discounted_price}
          </span>
          <span
            className="
              text-Dark-grayish-blue 
              line-through
            ">
            ${price}
          </span>
        </div>
        <button
          onClick={onClick}
          className={`
            text-white
            bg-${btn_color}
            hover:bg-${hover_btn_color}
            rounded-xl
            w-full
          `}>
          <div
            className="
              flex 
              fex-row 
              justify-center 
              items-center
              py-3
              px-10
            ">
            <img
              className="mr-2"
              src={btn_image}
              alt="btn image"
            />
            {btn_label}
          </div>
        </button>
      </div>
      <div
        className={`hidden bg-Dark-cyan hover:bg-hover_btn_color`}>
      </div>
    </div>
  )
}

export default Card;