'use client';
import { useEffect, useState } from "react";
import Button, { BtnProps } from "./Button/Button";

interface Props {
  scrollableElementId: string,
  btnType: BtnProps["type"];
}

let scrollLength: number = 200;

const ScrollBtn = ({ scrollableElementId, btnType }: Props) => {
  let [scrollableElement, setScrollableElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setScrollableElement(document.getElementById(scrollableElementId));
    if (scrollableElement) {
      const children = scrollableElement?.childNodes.length;
      scrollLength = scrollableElement.scrollWidth / (children - 1);
    }
    console.log(scrollableElement);
  }, []);

  const scrollLeft = () => {
    scrollableElement?.scrollBy({
      left: -scrollLength!,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollableElement?.scrollBy({
      left: scrollLength!,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Button direction="left" type={btnType} handleClick={scrollLeft}></Button>
      <Button direction="right" type={btnType} handleClick={scrollRight}></Button>
    </>
  );
};

export default ScrollBtn;