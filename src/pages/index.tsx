import { NextPage } from "next";
// import { Content } from "@/components";
import { SwiperBoard, Slide } from "@/components";
import useOnboarding from "@/hooks/useOnboarding";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css';
// import { Pagination } from 'swiper/modules';

interface IndexProps {};

const Index: NextPage<IndexProps> = () => {
  const { data } = useOnboarding();
  return (
    // <Content>
        <SwiperBoard>
          <div id="board-body">
            <Slide
              title={data["GET STARTED"].title}
              description={data["GET STARTED"].description}
            />
            <Slide
              title={data["VISIT PAGE"].title}
              description={data["VISIT PAGE"].description}
            />
            <Slide
              title={data["ACTION"].title}
              description={data["ACTION"].description}
            />
            <Slide
              title={data["END"].title}
              description={data["END"].description}
            />
          </div>
          <div id="board-footer">
            <button>
              Go Back
            </button>
            <button>
              Continue
            </button>
          </div>
        </SwiperBoard>
    // </Content>
  )
}

export default Index;