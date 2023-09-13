export interface ITabs {
    label: string;
    value: number;
    icon?: JSX.Element;
}

export type BackgroundType = 'solid' | 'linear' | 'radial';

export interface IBackground {
    type: BackgroundType;
    color: string;
}
