'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { GithubIcon, GoogleIcon } from '~/components/@icons';
import { Icons } from '~/components/icons';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { cn } from '~/styles/utils';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import AuthWithSocial from './AuthWithSocial';

const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Please enter your email to continue.',
    })
    .email(),
  password: z.string(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const defaultValues: Partial<LoginFormValues> = {};

export type LoginFormProps = React.HTMLAttributes<HTMLDivElement> & {};

const LoginForm: React.FC<LoginFormProps> = ({ className, ...otherProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  async function onSubmit(data: LoginFormValues) {
    console.log('login', data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...otherProps}>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input placeholder="your@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type={isShowPassword ? 'text' : 'password'}
                      {...field}
                    />
                  </FormControl>
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    className="h-8 w-8 absolute right-[5px] top-[50%] translate-y-[-50%] rounded-full"
                    onClick={() => setIsShowPassword((prev) => !prev)}
                  >
                    {isShowPassword ? (
                      <EyeNoneIcon className="h-4 w-4" />
                    ) : (
                      <EyeOpenIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} type="submit" className="w-full mt-10">
            {isLoading && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <AuthWithSocial className="w-full" disabled={isLoading} direction="vertical" />
    </div>
  );
};

export default LoginForm;
