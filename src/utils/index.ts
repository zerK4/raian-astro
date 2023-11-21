import type { EmailMessageType, UserFormInterface } from "../types/defaults";
import every from "lodash/every";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export const lazyLoad = (image: any, src: any) => {
  const loaded = () => {
    image.classList.add("visible");
    image.style.opacity = "1"; // REPL hack to apply loading animation
    image.classList.remove("animate-pulse");
  };
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      image.nodeName === "IMG" ? (image.src = src) : (image.src = src.video);
      if (image.complete) {
        // check if instantly loaded
        loaded();
      } else {
        image.classList.add("animate-pulse");
        image.addEventListener("load", loaded); // if the image isn't loaded yet, add an event listener
      }
    }
  }, options);
  observer.observe(image); // intersection observer

  return {
    destroy() {
      image.removeEventListener("load", loaded); // clean up the event listener
    },
  };
};

export const checkMediaType = (url: string) => {
  const lowercasedUrl = url.toLowerCase();

  if (lowercasedUrl.includes("video")) {
    return "video";
  } else if (lowercasedUrl.includes("photo")) {
    return "photo";
  } else {
    return "unknown";
  }
};

export const isComplete = (object: UserFormInterface) => {
  return every(
    object,
    (value: any) => value !== "" && value !== undefined && value !== null
  );
};
