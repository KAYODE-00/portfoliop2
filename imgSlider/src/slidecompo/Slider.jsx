import { descriptions, images } from "../compo/Data";

const Slider = () => {
  return (
    <div className="">
      <div>
        <div className="">{images.map((image,i) => <img key={i} src={image} width={500} />)}</div>
        <div>{descriptions.map((des,i) => <p key={i}>{des}</p>)}</div>
      </div>
    </div>
  );
};

export default Slider;

