import React from "react";
import { Button } from "src/components";
import { pricingCustomPriceText } from "src/constants/home";

interface Props {
  title: string;
  desc: string;
  price: number;
  reccuring?: string;
  className?: string;
  features: string[];
  isCustom?: boolean;
  hasTrial?: boolean;
}

const SubscriptionCard: React.FC<Props> = ({
  title,
  desc,
  price,
  reccuring,
  className,
  isCustom,
  features,
  hasTrial,
}) => {
  const cardClassName = className ?? "";

  return (
    <div
      className={`sub-card ${isCustom ? "custom-card" : ""} ${cardClassName}`}
    >
      <div className="card-header">
        <span className="card-title text-md">{title}</span>
      </div>
      <div className="card-body">
        <span
          className={`card-desc text-thin ${isCustom ? "custom-desc" : ""}`}
        >
          {desc}
        </span>
        {!isCustom ? (
          <div className="card-price-wrap">
            <span className="card-price text-giant">${price}</span>
            <span className="card-reccuring text-thin">/{reccuring}</span>
          </div>
        ) : (
          <span className="custom-placeholder list-item-text">
            {pricingCustomPriceText}
          </span>
        )}
        <ul className="card-list">
          {features.map((f) => (
            <li key={f} className="card-list-item list-item-text">
              <span className="icon">✅</span>
              {f}
            </li>
          ))}
        </ul>
        <a
          className="btn-purple btn btn-text"
        >
          Subscribe
        </a>
      </div>
      {hasTrial && (
        <p className="price-trial text-thin">
          Free trial for <span className="red-text">7 days</span>
        </p>
      )}
    </div>
  );
};

export default SubscriptionCard;
