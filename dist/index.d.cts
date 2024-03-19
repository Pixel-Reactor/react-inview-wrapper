import React$1 from 'react';

type InViewProps = {
    children?: React.ReactNode;
    customStyles?: string | undefined;
    customStyleIn?: string | undefined;
    customStyleOut?: string | undefined;
};

declare function InView({ children, customStyles, customStyleIn, customStyleOut }: InViewProps, _ref: React$1.ForwardedRef<HTMLDivElement>): React$1.JSX.Element;

export { InView, type InViewProps };
