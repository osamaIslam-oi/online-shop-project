interface iProps {
  src: string;
  alt: string;
  className: string;
}

const Image = ({ src, alt, className }: iProps) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
