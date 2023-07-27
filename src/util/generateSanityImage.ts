import urlFor from "@/lib/urlFor";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type generateSanityImageProps = SanityImageSource;

const generateSanityImage = (source: generateSanityImageProps) => {
  return urlFor(source).width(500).height(300).fit("max").url();
};

export default generateSanityImage;
