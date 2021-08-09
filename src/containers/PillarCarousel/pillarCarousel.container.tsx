import PillarCarousel from "../../components/PillarCarousel/pillarCarousel";
import img1 from "../../assets/_MG_3954-min.jpg";
import img2 from "../../assets/_MG_3821-min.jpg";
import img3 from "../../assets/_MG_3815-min.jpg";
import img4 from "../../assets/_MG_3964-min.jpg";
import img5 from "../../assets/_MG_3847-min.jpg";
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
