import EmblaCarousel from "embla-carousel";
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons";
import { addDotBtnsAndClickHandlers } from "./EmblaCarouselDotButton";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS = {};

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");
const prevBtnNode = emblaNode.querySelector(".embla__button--prev");
const nextBtnNode = emblaNode.querySelector(".embla__button--next");
const dotsNode = emblaNode.querySelector(".embla__dots");
alert("d");
const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
	emblaApi,
	prevBtnNode,
	nextBtnNode
);
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
	emblaApi,
	dotsNode
);

emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
