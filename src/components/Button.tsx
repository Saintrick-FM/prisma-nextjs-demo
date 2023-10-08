import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function Button({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "h-11 px-14 py-3 bg-cyan-700 rounded-3xl justify-center items-center gap-2 inline-flex w-fit hover:bg-cyan-800 transition-color duration-200 ease-in-out tracking-wider",
        className
      )}
      {...restProps}
    />
  );
}
