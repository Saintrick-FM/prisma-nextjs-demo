import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-center text-slate-600 text-2xl font-normal font-body leading-10 mb-4 md:mb-8">
      {children}
    </p>
  ),
};
/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText field={slice.primary.body} components={components} />

        <PrismicNextLink
          field={slice.primary.button_link}
          className="h-11 px-14 py-3 bg-cyan-700 rounded-3xl justify-center items-center gap-2
            inline-flex w-fit hover:bg-cyan-800 transition-color duration-200 ease-in-out tracking-wider mb-8 md:mb-10 "
        >
          <span className="text-center text-white text-base font-bold font-body tracking-wide">
            {slice.primary.button_text}
          </span>
        </PrismicNextLink>
        <PrismicNextImage
          field={slice.primary.image}
          className="drop-shadow-xl max-w-4xl w-full"
        />
      </div>
    </Bounded>
  );
};

export default Hero;
