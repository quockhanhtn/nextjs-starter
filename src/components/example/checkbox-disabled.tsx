import { Checkbox } from '~/components/ui/checkbox';

export default function CheckboxDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
