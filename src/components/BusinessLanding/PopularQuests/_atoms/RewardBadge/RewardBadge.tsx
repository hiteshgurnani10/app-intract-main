import rewardBadgeStyles from "./rewardBadge.module.css";
import { useMemo } from "react";
import gemsPng from "../../assets/gemstone.png";
import xpsSvg from "../../assets/xps.png";
import Image from "next/image";
export const RewardBadge = ({
  children,
  type = "custom",
  icon,
}: {
  children: string;
  type?: "xps" | "gems" | "custom";
  icon?: string | any;
}) => {
  const resolveUrl = useMemo(() => {
    if (type === "xps") {
      return xpsSvg;
    } else if (type === "gems") {
      return gemsPng;
    } else {
      return "";
    }
  }, [type]) as string;

  return (
    <div className={rewardBadgeStyles.container}>
      {icon ? icon : <Image src={resolveUrl} alt="resolver" height="15" />}
      {children}
    </div>
  );
};
