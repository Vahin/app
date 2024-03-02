import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новый компоненты.
 * @deprecated
 */
export const HStack = (props: HStackProps) => (
  <Flex {...props} direction='row' />
);
