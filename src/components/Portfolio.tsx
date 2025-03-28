import React, { JSX, useState } from 'react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Carousel from '@/components/ui/carousel';
import CarouselContent from '@/components/ui/carousel-content';
import { CardContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageData {
  src: string;
  description: string;
}

interface ImagePositions {
  main: ImageData;
  left: ImageData;
  leftSmall: ImageData;
  right: ImageData;
  rightSmall: ImageData;
}

// Анимация для изображений
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: { opacity: 0, scale: 0.8 }
};

// Анимация для перемещения
const positionTransition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
  duration: 0.5
};

export default function Box(): JSX.Element {
  // Все изображения с описаниями
  const images = {
    tree: {
      src: '/дерево.png',
      description: 'Работа выполнена для сайта, освещающего экологические проблемы Карелии. Она передает чувство тревоги и печали через изображение дерева за разбитым стеклом, символизирующее разрушение природы. Атмосфера мрачная и безнадёжная, подчеркивая необходимость защиты и восстановления природных ресурсов региона.'
    },
    jungle: {
      src: '/джунгли.png',
      description: 'Работа выполнена для сайта, организующего туристические походы через джунгли. Изображение передает ощущение густых тропических лесов, полного погружения в дикую природу. Визуализация создает атмосферу таинственности и приключений, приглашая зрителя стать частью этого захватывающего мира.'
    },
    ball: {
      src: '/шарик.png',
      description: 'Работа "субстанция" выполнена для выставки современного искусства, исследующей связь между искусством и космосом. Изображение показывает шар, окутываемый загадочной субстанцией на фоне черной пустоты космоса и поверхности Луны.'
    },
    bear: {
      src: '/мишка.png',
      description: 'Работа "Мишка" выполнена для фонда помощи в поиске пропавших детей. Изображение показывает игрушечного медведя, окруженного водной гладью океана, с оранжевым освещением, создающим атмосферу тревоги.'
    },
    perfume: {
      src: '/духи.png',
      description: 'Работа выполнена для рекламной кампании духов Sadowski. Изображены духи на круглой платформе, окруженные водной дымкой, на розовом фоне. Композиция подчеркивает элегантность и романтику продукта.'
    }
  };

  // Начальная позиция изображений
  const initialPositions: ImagePositions = {
    main: images.tree,
    left: images.jungle,
    leftSmall: images.ball,
    right: images.bear,
    rightSmall: images.perfume
  };

  const [positions, setPositions] = useState<ImagePositions>(initialPositions);
  const [activeImage, setActiveImage] = useState(images.tree.src);
  const [isAnimating, setIsAnimating] = useState(false);

  // Обработчик клика по изображению
  const handleImageClick = async (clickedImage: ImageData) => {
    if (clickedImage.src === positions.main.src || isAnimating) return;
    
    setIsAnimating(true);
    
    // Задержка для завершения
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let newPositions = {...positions};
    
    if (clickedImage.src === positions.left.src) {
      newPositions = {
        main: clickedImage,
        left: positions.main,
        leftSmall: positions.leftSmall,
        right: positions.right,
        rightSmall: positions.rightSmall
      };
    } 
    else if (clickedImage.src === positions.leftSmall.src) {
      newPositions = {
        main: clickedImage,
        left: positions.left,
        leftSmall: positions.main,
        right: positions.right,
        rightSmall: positions.rightSmall
      };
    }
    else if (clickedImage.src === positions.right.src) {
      newPositions = {
        main: clickedImage,
        left: positions.left,
        leftSmall: positions.leftSmall,
        right: positions.main,
        rightSmall: positions.rightSmall
      };
    }
    else if (clickedImage.src === positions.rightSmall.src) {
      newPositions = {
        main: clickedImage,
        left: positions.left,
        leftSmall: positions.leftSmall,
        right: positions.right,
        rightSmall: positions.main
      };
    }

    setPositions(newPositions);
    setActiveImage(clickedImage.src);
    setIsAnimating(false);
  };

  const handleDotClick = (image: ImageData) => {
    handleImageClick(image);
  };

  return (
    <div className="w-full h-screen bg-[#1b221b] overflow-hidden" id="portfolio">
      <div className="relative w-full h-full flex flex-col items-center">
        {/* Заголовок */}
        <header className="mt-[50px] text-center">
          <h1 className="font-bold text-[40px] text-[#dca844] font-['Istok_Web-Bold',Helvetica] tracking-normal">
            Примеры работ
          </h1>
          <div className="relative h-[51px] w-[327px] mx-auto mt-1">
            <img className="w-full h-full" alt="Decorative underline" src="/полоски_под_заголовком.svg" />
          </div>
        </header>

        {/* Карусель портфолио */}
        <Carousel className="w-full max-w-[1483px] h-[766px] mt-[60px]">
          <CarouselContent>
            <div className="relative w-full max-w-[1481px] h-[766px]">
              {/* Левое изображение (большое) */}
              <AnimatePresence>
                <motion.div
                  key={`left-${positions.left.src}`}
                  className="absolute w-[504px] h-[639px] top-[63px] left-[117px] overflow-hidden z-[10] cursor-pointer"
                  onClick={() => handleImageClick(positions.left)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  transition={positionTransition}
                  layout
                >
                  <img
                    src={positions.left.src}
                    alt="Left image"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Левое изображение (маленькое) */}
              <AnimatePresence>
                <motion.div
                  key={`leftSmall-${positions.leftSmall.src}`}
                  className="absolute w-[397px] h-[512px] top-[127px] left-0 overflow-hidden z-[5] cursor-pointer"
                  onClick={() => handleImageClick(positions.leftSmall)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  transition={positionTransition}
                  layout
                >
                  <img
                    src={positions.leftSmall.src}
                    alt="Left small image"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Центральное изображение */}
              <AnimatePresence>
                <motion.div
                  key={`main-${positions.main.src}`}
                  className="absolute w-[776px] h-[766px] top-0 left-[353px] overflow-hidden z-[20]"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  transition={positionTransition}
                  layout
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${positions.main.src})` }}
                  >
                    <Card className="absolute w-[736px] h-[271px] bottom-[20px] left-[20px] bg-black/50 rounded-md border-none">
                      <CardContent className="p-5">
                        <p className="text-xl text-[#dca844] font-['Istok_Web-Regular',Helvetica] leading-normal">
                          {positions.main.description}
                        </p>
                        <AnimatedButton className="mt-[10px]">
                          Обсудить проект
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Правое изображение (большое) */}
              <AnimatePresence>
                <motion.div
                  key={`right-${positions.right.src}`}
                  className="absolute w-[504px] h-[639px] top-[63px] left-[860px] overflow-hidden z-[10] cursor-pointer"
                  onClick={() => handleImageClick(positions.right)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  transition={positionTransition}
                  layout
                >
                  <img
                    src={positions.right.src}
                    alt="Right image"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Правое изображение (маленькое) */}
              <AnimatePresence>
                <motion.div
                  key={`rightSmall-${positions.rightSmall.src}`}
                  className="absolute w-[397px] h-[512px] top-[126px] left-[1084px] overflow-hidden z-[5] cursor-pointer"
                  onClick={() => handleImageClick(positions.rightSmall)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  transition={positionTransition}
                  layout
                >
                  <img
                    src={positions.rightSmall.src}
                    alt="Right small image"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </CarouselContent>
        </Carousel>

        {/* точки */}
        <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          {Object.values(images).map((image, index) => (
            <motion.button
              key={index}
              className="relative mr-[10px]"
              onClick={() => handleDotClick(image)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img 
                src={`/круг${index + 1}.svg`} 
                alt={`Navigation dot ${index + 1}`} 
              />
              {activeImage === image.src && (
                <motion.img 
                  src="/центр_круг.svg" 
                  alt="Center navigation dot" 
                  className="absolute inset-0 m-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}