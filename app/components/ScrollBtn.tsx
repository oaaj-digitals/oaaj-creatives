'use client';
import { useEffect } from "react";
import Button from "./Button/Button"

let scrollableContent: HTMLElement | null = null;
let scrollLength: number = 200

const ScrollBtn = () => {

  useEffect(() => {
    scrollableContent = document.getElementById('displayProjects');
    if (scrollableContent) {
      const children = scrollableContent?.childNodes.length
      scrollLength = scrollableContent.scrollWidth / (children - 1);
    }
  }, [])

  const scrollLeft = () => {
    scrollableContent?.scrollBy({
      left: -scrollLength!,
      behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    scrollableContent?.scrollBy({
      left: scrollLength!,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Button direction="left" type="secondaryBtn" handleClick={scrollLeft}></Button>
      <Button direction="right" type="secondaryBtn" handleClick={scrollRight}></Button>
    </>
  )
}

export default ScrollBtn