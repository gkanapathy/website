import classNames from "classnames";
import { SquareArrowOutUpRight } from "lucide-react";
import { pretendardVariable } from "../text";
import s from "./Link.module.css";

export interface SimpleLink {
  text: string;
  href: string;
}

export interface LinkProps extends SimpleLink {
  className?: string;
  weight?: "light" | "regular" | "medium";
}

export default function Link({
  className,
  text,
  href,
  weight = "light",
}: LinkProps) {
  const isExternal = !href.startsWith("/");
  return (
    <a
      className={classNames(s.link, pretendardVariable.className, className, {
        [s.weightLight]: weight === "light",
        [s.weightRegular]: weight === "regular",
        [s.weightMedium]: weight === "medium",
      })}
      href={href}
      target={isExternal ? "_blank" : ""}
    >
      {text} {isExternal && <SquareArrowOutUpRight size={16} />}
    </a>
  );
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonTheme = "neutral" | "brand";

export interface ButtonLinkProps extends LinkProps {
  size?: ButtonSize;
  theme?: ButtonTheme;
}

export function ButtonLink({
  size = "medium",
  theme = "brand",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={classNames(s.buttonLink, className, {
        [s.brand]: theme === "brand",
        [s.neutral]: theme === "neutral",
        [s.small]: size === "small",
        [s.medium]: size === "medium",
        [s.large]: size === "large",
      })}
      {...props}
    />
  );
}
