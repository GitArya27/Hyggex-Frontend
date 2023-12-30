import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtInterBold124: "font-bold font-inter",
  txtMontserratRomanBold28: "font-bold font-montserrat",
  txtInterBold48: "font-bold font-inter",
  txtMontserratRomanBold32: "font-bold font-montserrat",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtInterSemiBold28: "font-inter font-semibold",
  txtMontserratRomanBold28Indigo900: "font-bold font-montserrat",
  txtLatoBold3826: "font-bold font-lato",
  txtInterBold20: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtManropeMedium18: "font-manrope font-medium",
  txtAlegreyaSansBold72: "font-alegreyasans font-bold",
  txtInterBold24Bluegray90001: "font-bold font-inter",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
