export interface ITabs {
    label: string;
    value: number;
    icon?: JSX.Element;
}
export enum BackgroundEnum {
    SOLID = 'solid',
    LINEAR = 'linear',
    RADIAL = 'radial',
}

export type BackgroundType =
    (typeof BackgroundEnum)[keyof typeof BackgroundEnum];

export interface IBackground {
    type: BackgroundEnum;
    color: string;
}

export type BackgroundTypeTabType = {
    label: string;
    value: BackgroundType;
    color: string;
};
