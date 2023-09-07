interface SlideProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({
  title,
  description,
  children
}) => {
  return (
    <div className="w-full h-full">
      <h3 className="">
        {title}
      </h3>
      <p className="">
        {description}
      </p>
      {children && children}
    </div>
  )
} 