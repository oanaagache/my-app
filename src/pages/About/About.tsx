import { BiChevronsDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "./About.css";

export const About = () => {
  let navigate = useNavigate();

  return (
    <div className="about">
      <h2 className="h2-about">
        We stock a wide range of hiking gearproducts. Including clothes,shoes,
        helmets, crampons and ice axes, in addition to all the various
        accessories that you might need.Use our menu below to find a product you
        are interested in, or use our contact form to ask for any advice you
        might need. We are always happy to help!
      </h2>

      <h2 className="h2-about">
        Our mountaineering experts have tested the best mountaineering backpacks
        over 9 the last years. After buying 10 of the latest and greatest, our
        field testers hauled them into the mountains. We scrambled up remote
        alpine peaks, swung ice tools on steep waterfall ice, and set out for
        multi-week expeditions.
      </h2>
      <h2 className="h2-about">
        We tested these packs all throughout North America, dragging them up
        summits in California, Alaska, and multiple ranges in Canada.Our group
        of test packs has been used tirelessly for months on end, through all
        seasons.The result?A comprehensive, unbiased, and honest review,
        objectively comparing and scoring products- all summarized and packaged
        here to help guide you to your ideal pack for your mountain adventures.
      </h2>

      <a
        className="buttonChevron"
        onClick={() => {
          navigate("/products");
        }}
      >
        <BiChevronsDown />
      </a>
    </div>
  );
};
