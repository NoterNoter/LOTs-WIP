import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);


// animation quotes

const quotes = document.querySelectorAll(".text-anim");
  quotes.forEach((quote, i) => {
    let image = quote.querySelector("img")

      quote.split = new SplitText(quote, {
      type:"words,chars",
      wordsClass: "split-line"
    });

    gsap.set(quote, {perspective: 400});
    let tl = gsap.timeline({
      scrollTrigger :{
        trigger: quote,
        animation: tl,
      }
    })
    // tl.to(image,{ opacity: 1, ease: "ease", duration: 0.1});
    tl.fromTo(quote.split.words,
    {autoAlpha: 0},{  duration: 2, autoAlpha: 1,ease: "ease-",stagger: 0.08});

  });



