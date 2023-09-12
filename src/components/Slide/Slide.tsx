import { Text } from "@/components"
interface SlideProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({
  title,
  description
}) => {
  return (
    <div className="w-full h-full grid p-10">
      <Text>
        {title}
      </Text>
      <Text classVariant="secondary">
        {description}
      </Text>
    </div>
  )
} 