import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новый компоненты.
 * @deprecated
 */
export const VStack = (props: VStackProps) => (
  <Flex {...props} direction='column' />
);
