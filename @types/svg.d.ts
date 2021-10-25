declare module "*.svg" {
    import React from 'react';
    import Svg, { ReactSVGProps } from 'react-svg';
    const content: React.FC<ReactSVGProps>;
    export default content;
}