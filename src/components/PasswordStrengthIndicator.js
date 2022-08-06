import React from "react";

export default function PasswordStrengthIndicator({
  validity: { minChar, number, specialChar },
}) {
  return (
    <div className="password-meter text-left mb-4">
      <p className="text-dark">Password must contain</p>
      <ul className="text-muted" style={{margin:0, paddingLeft:15}}>
        <PasswordStrengthIndicatorItem
          isValid={minChar}
          text="Have atleast 8 character"
        />
        <PasswordStrengthIndicatorItem
          isValid={number}
          text="Have atleast 1 number"
        />
        <PasswordStrengthIndicatorItem
          isValid={specialChar}
          text="Have atleast 8 special character"
        />
      </ul>
    </div>
  );
}

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
  const highlightclass = isValid
    ? "text-success"
    : isValid !== null
    ? "text-danger"
    : "";
  return <li className={highlightclass}>{text}</li>;
};
