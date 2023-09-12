import Image from "next/image";
import PlanetGif from '@/assets/static/PlanetSystem.gif';

interface CardProps {
  children: React.ReactNode;
}

const s = '../../assets/static/PlanetSystem.gif';

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full rounded-2xl bg-[transparent] shadow-2xl p-10">
      <div className="h-full w-full absolute top-0 left-0 rounded-2xl -z-10 bg-gradient-space">asdas</div>
      {/* <video width="100%" height="100%" controls className="h-full w-full absolute top-0 left-0 rounded-2xl z-20" src={s}>
        <source src={s} type="video/gif" />
      </video> */}
      <Image src={PlanetGif} alt="planet" className="h-full w-full absolute top-0 left-0 rounded-2xl -z-20" />
      {children}
    </div>
  )
}