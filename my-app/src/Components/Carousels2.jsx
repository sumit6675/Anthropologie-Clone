import React,{useState} from 'react'
import {Flex,Box,Image,Text,HStack} from "@chakra-ui/react"
function Carousels2(){
    const arrowStyles = {
      cursor: "pointer",
      pos: "absolute",
      top: "50%",
      w: "auto",
      mt: "-22px",
      p: "16px",
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      transition: "0.6s ease",
      borderRadius: "0 3px 3px 0",
      userSelect: "none",
      _hover: {
        opacity: 0.8,
        bg: "black",
      },
    };
    const slides = [
      {
        img: "https://images.ctfassets.net/5de70he6op10/1MjPYsR6u5DhaKklqpKiCS/52d20c97185a9baa3e006f32973dd9b4/ALiving_HPG_LS_4-2-1.jpg?w=1980&q=80&fm=webp",
      },
      {
        img: "https://images.ctfassets.net/5de70he6op10/3oaxcE4JWW5bDj4wmoFnOK/438867e8c21cbcda8f48d6d4c2689c0a/ALiving_HPG_LS_1-2-2_2x.jpg?w=1980&q=80&fm=webp",
      },
      {
        img: "https://images.ctfassets.net/5de70he6op10/6UbxCAzShzE10SBKCNxZ5e/3e1bbc1a0862730e5088d2661c6a08a1/ALiving_HPG_LS_1-2-3_2x.jpg?w=1980&q=80&fm=webp",
      },
      {
        img: "https://images.ctfassets.net/5de70he6op10/6iFXEzaVry3zkyNUEmMLAD/81ab1609a51f783256b0d046f6f53cc3/ALiving_HPG_LS_1-2-4_2x.jpg?w=1980&q=80&fm=webp",
      },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
  
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
  
    const setSlide = (slide) => {
      setCurrentSlide(slide);
    };
  
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };
    return (
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex h="600px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
    );
  };
  

export default Carousels2