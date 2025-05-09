import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function SkillsCarousel() {
  const images = [
    "/assets/slider-images/javascript.webp",
    "/assets/slider-images/typescript.webp",
    "/assets/slider-images/react.webp",
    "/assets/slider-images/git.webp",
    "/assets/slider-images/blue-github.webp",
    "/assets/slider-images/tailwind.webp",
    "/assets/slider-images/astro.webp",
    "/assets/slider-images/mysql.webp",
    "/assets/slider-images/express.webp",
    "/assets/slider-images/postman.webp",
    "/assets/slider-images/shadcn.webp",
    "/assets/slider-images/storybook.webp",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      autoplay={2000}
      className="w-full mt-3 self-center flex items-center justify-center"
    >
      <CarouselContent className=" lg:w-full lg:h-full">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3 md:basis-1/4 max-md:pt-4 md:p-4"
          >
            <div className="md:p-1">
              <div>
                <div className="flex aspect-square items-center justify-center">
                  <img
                    src={image}
                    alt="React"
                    className="w-full h-full max-w-24 md:max-w-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
