import { default as debounce } from './utils/debounce-cb';
import { default as dates } from './utils/get-date';
import { default as catchError } from './utils/api';
import { default as params } from './utils/params';
import { default as extractObjectKeys } from './utils/extract-object-keys';
import { default as ScrollTimeline } from './ui/ScrollTimeline';
import { default as ScrollProgressBar } from './ui/ScrollProgressBar';
declare const utils: {
    debounce: (cb: (...args: Array<string | number | object | null | undefined | unknown>) => void, delayTime: number) => (...args: (typeof cb)["arguments"]) => void;
    dates: {
        getLastMonth: () => Date;
        getCurrentMonth: () => Date;
        getLastYear: () => Date;
        getCurrentYear: () => Date;
        getTomorrow: () => Date;
        getYesterday: () => Date;
        getToday: () => Date;
    };
    catchError: <T>(promise: Promise<T>) => Promise<[undefined, T] | [Error]>;
    params: {
        filteredParams: <T extends object = any>(params?: T) => {
            [k: string]: any;
        };
        filteredParamsSerializer: (params: Record<string, any>) => string;
    };
    extractObjectKeys: <T extends object>(obj: T) => (keyof T)[];
};
declare const _default: {
    utils: {
        debounce: (cb: (...args: Array<string | number | object | null | undefined | unknown>) => void, delayTime: number) => (...args: (typeof cb)["arguments"]) => void;
        dates: {
            getLastMonth: () => Date;
            getCurrentMonth: () => Date;
            getLastYear: () => Date;
            getCurrentYear: () => Date;
            getTomorrow: () => Date;
            getYesterday: () => Date;
            getToday: () => Date;
        };
        catchError: <T>(promise: Promise<T>) => Promise<[undefined, T] | [Error]>;
        params: {
            filteredParams: <T extends object = any>(params?: T) => {
                [k: string]: any;
            };
            filteredParamsSerializer: (params: Record<string, any>) => string;
        };
        extractObjectKeys: <T extends object>(obj: T) => (keyof T)[];
    };
    ui: {
        ScrollTimeline: import('react').FC<{
            list?: import('./ui/ScrollTimeline').TimelineItem[];
            clsYearStyles?: string;
            clsDescStyles?: string;
        }>;
        ScrollProgressBar: import('react').FC<{
            clsStyles?: string;
        }>;
    };
};
export default _default;
export { debounce, dates, catchError, params, extractObjectKeys };
export { ScrollTimeline, ScrollProgressBar };
export { utils };
export type { TimelineItem } from './ui/ScrollTimeline';
