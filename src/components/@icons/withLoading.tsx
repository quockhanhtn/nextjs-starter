import { cn } from '~/styles/utils';
import { Loader2 as LoaderIcon } from 'lucide-react';

import { SvgIconProps } from './types';

type WithLoadingProps = {
  isLoading?: boolean;
};

const withLoading = (WrappedComponent: React.ComponentType<SvgIconProps>) => {
  const WithLoading: React.FC<SvgIconProps & WithLoadingProps> = ({
    isLoading = false,
    className,
    ...otherProps
  }) => {
    if (isLoading) {
      return <LoaderIcon className={cn(className, 'animate-spin')} />;
    }
    return <WrappedComponent className={className} {...otherProps} />;
  };

  return WithLoading;
};

export default withLoading;
