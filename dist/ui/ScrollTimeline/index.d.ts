import { default as React } from 'react';
export interface TimelineItem {
    year: string;
    items: string[];
}
type Props = {
    list?: TimelineItem[];
    clsYearStyles?: string;
    clsDescStyles?: string;
};
declare const ScrollTimeline: React.FC<Props>;
export default ScrollTimeline;
