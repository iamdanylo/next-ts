import React, { ChangeEvent, useRef } from "react";

interface Props {
  id: string;
  name: string;
  type: "text" | "number" | "email" | "submit" | "password";
  value: string;
  isError?: boolean;
  errorText?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  hasSbmtBtn?: boolean;
}

const Input: React.FC<Props> = ({
  id,
  name,
  value,
  type,
  isError,
  errorText,
  placeholder,
  onChange,
  autoFocus,
  hasSbmtBtn,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const defaultProps = {
    id: id,
    name: name,
    type: type,
    className: "input input-text",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    autoFocus: autoFocus,
  };

  return (
    <>
      <div
        className={`input-container ${isError ? "error" : ""}`}
        onClick={() => inputRef?.current?.focus()}
      >
        <input ref={inputRef} {...defaultProps} />
        {hasSbmtBtn && (
          <button type="submit" className="submit-btn">
            <img src="./icons/arrow-right.svg" alt="" />
          </button>
        )}
      </div>
      {isError && (
        <span className="input-label-error text-thin">{errorText}</span>
      )}
    </>
  );
};

export default Input;
