// for utils
import debounce from "./utils/debounce-cb";
import dates from "./utils/get-date";
import params from "./utils/params";
import extractObjectKeys from "./utils/extract-object-keys";
import apis from "./utils/api";
import Aborter from "./utils/aborter";
import measureText from "./utils/measureText";

// for ui
import ScrollTimeline from "./ui/ScrollTimeline";
import ScrollProgressBar from "./ui/ScrollProgressBar";
import DetectIntersectionObserver from "./ui/DetectIntersectionObserver";
import MagicMenuTriangle from "./ui/MagicMenuTriangle";

// CSS is exported separately via package.json exports
// Users should import it as: import 'master-js-utils/style.css'

const utils = {
  debounce,
  dates,
  apis,
  params,
  measureText,
  extractObjectKeys,
  Aborter,
};
const ui = {
  ScrollTimeline,
  ScrollProgressBar,
  DetectIntersectionObserver,
  MagicMenuTriangle,
};

// Default export
export default {
  utils,
  ui,
};

// Named exports for individual utilities
export {
  debounce,
  dates,
  params,
  apis,
  measureText,
  extractObjectKeys,
  Aborter,
};

// Named exports for UI components
export {
  ScrollTimeline,
  ScrollProgressBar,
  DetectIntersectionObserver,
  MagicMenuTriangle,
};

// Export utils object
export { utils };

// Export types
export type { TimelineItem } from "./ui/ScrollTimeline";
