import { useId } from "react";

import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import clsx from "clsx";

import styles from "./RadioGroupField.module.css";

interface RadioGroupFieldProps<T extends string> {
  value: T;
  label: string;
  options: Array<{ value: T; label: string; }>
  setValue: (value: T) => void;
}

const RadioGroupField = <T extends string>({ label, options, value, setValue }: RadioGroupFieldProps<T>) => {
  const id = useId();
  return (
    <RadioGroup aria-labelledby={id} value={value} onValueChange={(newValue) => setValue(newValue)} className={clsx(styles["radio-group"])}>
      <div className={clsx(styles["caption"])} id={id}>
        {label}
      </div>

      <ul className={clsx(styles["list"])}>
        {options.map((option) => (
          <li key={option.value}>
            <label className={clsx(styles["item"])}>
              <Radio.Root value={option.value} className={clsx(styles["radio"])}>
                <Radio.Indicator className={clsx(styles["indicator"])} />
              </Radio.Root>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </RadioGroup>
  );
};

export default RadioGroupField;
