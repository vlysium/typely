import { Checkbox } from "@base-ui/react";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";

import styles from "./CheckboxField.module.css";

interface CheckboxFieldProps {
  className?: string;
  value: boolean;
  setValue: (value: boolean) => void;
  label: string;
}

const CheckboxField = ({ className, value, setValue, label }: CheckboxFieldProps) => {
  return (
    <label className={clsx(styles["label"], className)}>
      {label}
      <Checkbox.Root className={styles["checkbox"]} checked={value} onCheckedChange={setValue}>
        <Checkbox.Indicator className={styles["indicator"]}>
          <CheckIcon className={styles["icon"]} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </label>
  );
};

export default CheckboxField;
