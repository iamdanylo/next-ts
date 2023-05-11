interface Props {
  iconBgColor?: string;
  title: string;
  className?: string;
  iconUrl: string;
}

const FeatureCard: React.FC<Props> = ({
  className,
  iconBgColor,
  iconUrl,
  title,
}) => {
  const cardClassName = className ?? "";

  return (
    <div className={`feature ${cardClassName}`}>
      <div style={{backgroundColor: iconBgColor || '#EAE3FF'}} className="icon-wrap">
        <img className="icon" src={iconUrl} alt="" />
      </div>
      <div className="text-wrap">
        <p className="desc text-body">{title}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
