import PillarCarousel from "../../components/PillarCarousel/pillarCarousel";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import "./pillarCarousel.container.scss";
import SectionDescription from "../../components/SectionDescription/sectionDescription";

const DEVICE_BREAKPOINT = 1024;

interface PillarCarouselContainerProps {}

export default function PillarCarouselContainer({}: PillarCarouselContainerProps) {
  return (
    <div className="pillarContainer">
      <div className="pillarText">
        <h1>Lorem ipsum</h1>
        {window.innerWidth >= DEVICE_BREAKPOINT && <SectionDescription />}
      </div>
      <div className="pillarCarouselContainer">
        <PillarCarousel images={[img1, img2, img3, img4, img5]} />
      </div>
      {window.innerWidth < DEVICE_BREAKPOINT && (
        <SectionDescription className={"pillarDescription"} />
      )}
    </div>
  );
}
