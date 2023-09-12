type Variant = 
  'DEFAULT' |
  'SPACE';

type ClassVariant = 
  'primary' |
  'secondary';

interface CardProps {
  children: React.ReactNode;
  variant?: Variant;
  classVariant?: ClassVariant;
}

export const Text: React.FC<CardProps> = ({ children, variant = 'DEFAULT', classVariant = 'primary' }) => {
  return (
    <div className={`text-${classVariant}-${variant.toLowerCase()}`}>
      {children}
    </div>
  )
}