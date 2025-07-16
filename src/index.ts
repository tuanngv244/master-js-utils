// for utils
import debounce from "./utils/debounce-cb";
import dates from "./utils/get-date";
import catchError from "./utils/api";
import params from "./utils/params";
import extractObjectKeys from "./utils/extract-object-keys";

// for ui
import ScrollTimeline from "./ui/ScrollTimeline";
import ScrollProgressBar from "./ui/ScrollProgressBar";

// CSS is exported separately via package.json exports
// Users should import it as: import 'master-js-utils/style.css'

const utils = { debounce, dates, catchError, params, extractObjectKeys };
const ui = { ScrollTimeline, ScrollProgressBar };

// Default export
export default {
  utils,
  ui,
};

// Named exports for individual utilities
export { debounce, dates, catchError, params, extractObjectKeys };

// Named exports for UI components
export { ScrollTimeline, ScrollProgressBar };

// Export utils object
export { utils };

// Export types
export type { TimelineItem } from "./ui/ScrollTimeline";
