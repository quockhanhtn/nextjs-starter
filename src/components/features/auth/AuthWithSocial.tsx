import { GithubIcon, GoogleIcon } from '~/components/@icons';
import { Button } from '~/components/ui/button';
import { cn } from '~/styles/utils';

export type AuthWithSocialProps = React.HTMLProps<HTMLDivElement> & {
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
};

const AuthWithSocial: React.FC<AuthWithSocialProps> = ({
  disabled = false,
  direction = 'horizontal',
  className,
  ...othersProps
}) => {
  const onAuthWithGoogle = () => {};
  const onAuthWithGithub = () => {};

  if (direction === 'horizontal') {
    return (
      <div
        className={cn(className, 'flex flex-row align-middle justify-center gap-x-2')}
        {...othersProps}
      >
        <Button
          variant="outline"
          type="button"
          size="icon"
          disabled={disabled}
          onClick={onAuthWithGoogle}
        >
          <GoogleIcon className="h-4 w-4" isLoading={disabled} />
        </Button>
        <Button
          variant="outline"
          type="button"
          size="icon"
          disabled={disabled}
          onClick={onAuthWithGithub}
        >
          <GithubIcon className="h-4 w-4" isLoading={disabled} />
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(className, 'flex flex-col align-middle justify-center gap-y-2')}
      {...othersProps}
    >
      <Button variant="outline" type="button" disabled={disabled} onClick={onAuthWithGoogle}>
        <GoogleIcon className="h-4 w-4 mr-2" isLoading={disabled} /> Google
      </Button>

      <Button variant="outline" type="button" disabled={disabled} onClick={onAuthWithGithub}>
        <GithubIcon className="h-4 w-4 mr-2" isLoading={disabled} /> Github
      </Button>
    </div>
  );
};

export default AuthWithSocial;
