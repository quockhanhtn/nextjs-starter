import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import AccordionDemo from '@/components/example/accordion-demo';
import AlertDialogDemo from '@/components/example/alert-dialog-demo';
import AspectRatioDemo from '@/components/example/aspect-ratio-demo';
import AvatarDemo from '@/components/example/avatar-demo';
import BadgeDemo from '@/components/example/badge-demo';
import BadgeDestructive from '@/components/example/badge-destructive';
import BadgeOutline from '@/components/example/badge-outline';
import BadgeSecondary from '@/components/example/badge-secondary';
import ButtonDemo from '@/components/example/button-demo';
import ButtonDestructive from '@/components/example/button-destructive';
import ButtonGhost from '@/components/example/button-ghost';
import ButtonLink from '@/components/example/button-link';
import ButtonLoading from '@/components/example/button-loading';
import ButtonOutline from '@/components/example/button-outline';
import ButtonSecondary from '@/components/example/button-secondary';
import ButtonWithIcon from '@/components/example/button-with-icon';
import CardDemo from '@/components/example/card-demo';
import CheckboxDemo from '@/components/example/checkbox-demo';
import CollapsibleDemo from '@/components/example/collapsible-demo';
import CommandDemo from '@/components/example/command-demo';
import ContextMenuDemo from '@/components/example/context-menu-demo';
import DatePickerDemo from '@/components/example/date-picker-demo';
import DialogDemo from '@/components/example/dialog-demo';
import DropdownMenuDemo from '@/components/example/dropdown-menu-demo';
import HoverCardDemo from '@/components/example/hover-card-demo';
import MenubarDemo from '@/components/example/menubar-demo';
import NavigationMenuDemo from '@/components/example/navigation-menu-demo';
import PopoverDemo from '@/components/example/popover-demo';
import ProgressDemo from '@/components/example/progress-demo';
import RadioGroupDemo from '@/components/example/radio-group-demo';
import ScrollAreaDemo from '@/components/example/scroll-area-demo';
import SelectDemo from '@/components/example/select-demo';
import SeparatorDemo from '@/components/example/separator-demo';
import SheetDemo from '@/components/example/sheet-demo';
import SkeletonDemo from '@/components/example/skeleton-demo';
import SliderDemo from '@/components/example/slider-demo';
import SwitchDemo from '@/components/example/switch-demo';
import TabsDemo from '@/components/example/tabs-demo';
import ToastDemo from '@/components/example/toast-demo';
import ToggleDemo from '@/components/example/toggle-demo';
import ToggleDisabled from '@/components/example/toggle-disabled';
import ToggleOutline from '@/components/example/toggle-outline';
import ToggleWithText from '@/components/example/toggle-with-text';
import TooltipDemo from '@/components/example/tooltip-demo';

export default function ExamplePage() {
  return (
    <div className="container">
      <div className="grid gap-4">
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="grid gap-4">
            <ComponentWrapper>
              <CardDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper>
              <SliderDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper
              className="spa flex-col items-start space-x-0
				space-y-2"
            >
              <p className="text-sm text-muted-foreground">Documentation</p>
              <p className="text-sm font-medium leading-none">
                You can customize the theme using{' '}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground">
                  CSS variables
                </code>
                . {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link href="#" className="font-medium text-primary underline underline-offset-4">
                  Click here
                </Link>{' '}
                to learn more.
              </p>
            </ComponentWrapper>
            <ComponentWrapper>
              <CheckboxDemo />
              <HoverCardDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
              <TabsDemo />
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <MenubarDemo />
              <AvatarDemo />
            </ComponentWrapper>
            <ComponentWrapper className="flex-col items-start space-x-0 space-y-2">
              <div className="flex space-x-2">
                <ButtonDemo />
                <ButtonSecondary />
                <ButtonDestructive />
              </div>
              <div className="flex space-x-2">
                <ButtonOutline />
                <ButtonLink />
                <ButtonGhost />
              </div>
              <div className="flex space-x-2">
                <ButtonWithIcon />
                <ButtonLoading />
              </div>
              <div className="flex space-x-2">
                <Button size="lg">Large</Button>
                <Button size="sm">Small</Button>
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <DatePickerDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <AccordionDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&_ul>li:last-child]:hidden">
              <NavigationMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper className="justify-between">
              <SwitchDemo />
              <SelectDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <SeparatorDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <AspectRatioDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <PopoverDemo />
              <ToastDemo />
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <TooltipDemo />
              <SheetDemo />
              <ProgressDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <CommandDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>span]:h-[80px] [&>span]:w-[200px]">
              <RadioGroupDemo />
              <ContextMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <DropdownMenuDemo />
                <AlertDialogDemo />
                <DialogDemo />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <BadgeDemo />
                <BadgeSecondary />
                <BadgeDestructive />
                <BadgeOutline />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <SkeletonDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
              <CollapsibleDemo />
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <ToggleDemo />
                <ToggleOutline />
                <ToggleDisabled />
                <ToggleWithText />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <ScrollAreaDemo />
            </ComponentWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentWrapper({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center justify-between space-x-4 rounded-md p-4', className)}>
      {children}
    </div>
  );
}
