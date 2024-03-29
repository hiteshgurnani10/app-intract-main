import clsx from "clsx";
import { StaticImageData } from "next/image";
import React, { FC } from "react";
import style from "./button.module.css";
import { Outfit } from "next/font/google";
import Image from "next/image";
const outfit = Outfit({ subsets: ["latin"] });

interface IButtonProps {
  className: string;
  name: string;
  hasImg?: boolean;
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <div
      className={clsx(
        style.button,
        props.className
      )}
    >
      {props.name}
    </div>
  );
};

export default Button;
