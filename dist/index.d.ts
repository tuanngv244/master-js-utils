import { default as debounce } from './utils/debounce-cb';
import { default as dates } from './utils/get-date';
import { default as params } from './utils/params';
import { default as extractObjectKeys } from './utils/extract-object-keys';
import { default as apis } from './utils/api';
import { default as Aborter } from './utils/aborter';
import { default as measureText } from './utils/measureText';
import { default as ScrollTimeline } from './ui/ScrollTimeline';
import { default as ScrollProgressBar } from './ui/ScrollProgressBar';
import { default as DetectIntersectionObserver } from './ui/DetectIntersectionObserver';
import { default as MagicMenuTriangle } from './ui/MagicMenuTriangle';
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
    apis: {
        catchError: <T>(promise: Promise<T>) => Promise<[undefined, T] | [Error]>;
        retryFetch: (fn: (...args: any[]) => void, retries?: number, delay?: number) => Promise<(...args: any[]) => Promise<void>>;
    };
    params: {
        filteredParams: <T extends object = any>(params?: T) => {
            [k: string]: any;
        };
        filteredParamsSerializer: (params: Record<string, any>) => string;
    };
    measureText: (text: string, font: string) => {
        width: number;
        height: number;
    };
    extractObjectKeys: <T extends object>(obj: T) => (keyof T)[];
    Aborter: typeof Aborter;
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
        apis: {
            catchError: <T>(promise: Promise<T>) => Promise<[undefined, T] | [Error]>;
            retryFetch: (fn: (...args: any[]) => void, retries?: number, delay?: number) => Promise<(...args: any[]) => Promise<void>>;
        };
        params: {
            filteredParams: <T extends object = any>(params?: T) => {
                [k: string]: any;
            };
            filteredParamsSerializer: (params: Record<string, any>) => string;
        };
        measureText: (text: string, font: string) => {
            width: number;
            height: number;
        };
        extractObjectKeys: <T extends object>(obj: T) => (keyof T)[];
        Aborter: typeof Aborter;
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
        DetectIntersectionObserver: ({ onProcess, children }: {
            onProcess: VoidFunction;
            children?: React.ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
        MagicMenuTriangle: ({ ulClsStyles, liClsStyles, data }: {
            ulClsStyles?: string;
            liClsStyles?: string;
            data?: import('./ui/MagicMenuTriangle').MenuItem[];
        }) => import("react/jsx-runtime").JSX.Element;
    };
};
export default _default;
export { debounce, dates, params, apis, measureText, extractObjectKeys, Aborter, };
export { ScrollTimeline, ScrollProgressBar, DetectIntersectionObserver, MagicMenuTriangle, };
export { utils };
export type { TimelineItem } from './ui/ScrollTimeline';
