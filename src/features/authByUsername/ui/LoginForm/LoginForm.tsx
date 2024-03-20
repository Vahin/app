import { LoginFormProps } from '../../types/LoginFormProps';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { LoginFormRedisigned } from './redisigned/LoginFormRedisigned';
import { LoginFormDeprecated } from './deprecated/LoginFormDeprecated';

const LoginForm = (props: LoginFormProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<LoginFormRedisigned {...props} />}
    off={<LoginFormDeprecated {...props} />}
  />
);

export default LoginForm;
