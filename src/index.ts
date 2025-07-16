// Import global styles
import "./index.css";

// for utils
import debounce from "./utils/debounce-cb";
import dates from "./utils/get-date";
import catchError from "./utils/api";
import params from "./utils/params";
import extractObjectKeys from "./utils/extract-object-keys";

// for ui
import ScrollTimeline from "./ui/ScrollTimeline";
import ScrollProgressBar from "./ui/ScrollProgressBar";

const utils = { debounce, dates, catchError, params, extractObjectKeys };
const ui = { ScrollTimeline, ScrollProgressBar };

export default {
  utils,
  ui,
};

export type { TimelineItem } from "./ui/ScrollTimeline";
