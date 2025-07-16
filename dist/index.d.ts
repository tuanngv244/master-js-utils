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
export type { TimelineItem } from './ui/ScrollTimeline';
