import { SVGProps, VFC } from 'react';

export interface NavbarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>
  authOnly?: boolean
}
