import { Select } from "@base-ui/react";
import clsx from "clsx";
import { Check, ListChevronsUpDown } from "lucide-react";

import styles from "./SelectField.module.css";

interface SelectFieldProps<T extends string | number> {
	className?: string;
	value: T;
	label: string;
	options: Array<{ label: string; value: T }>;
  disabled?: boolean;
  setValue: (value: T) => void;
}

const SelectField = <T extends string | number>({ className, value, setValue, label, options, disabled }: SelectFieldProps<T>) => {
	return (
    <div className={clsx(styles["field"], className)}>
      <Select.Root items={options} value={value} onValueChange={(newValue) => setValue(newValue!)}>
        <Select.Label className={clsx(styles["label"])}>{label}</Select.Label>
        <Select.Trigger className={clsx(styles["select"])} disabled={disabled}>
          <Select.Value className={clsx(styles["value"])} placeholder="&ensp;" />
					<Select.Icon className={clsx(styles["icon"])}>
						<ListChevronsUpDown className={styles["chevrons-icon"]} />
					</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner className={clsx(styles["positioner"])} sideOffset={4} alignItemWithTrigger={false}>
            <Select.Popup className={clsx(styles["popup"])}>
              <Select.List className={clsx(styles["list"])}>
                {options.map((option) => (
                  <Select.Item key={option.label} value={option.value} className={clsx(styles["item"])}>
                    <Select.ItemIndicator className={clsx(styles["item-indicator"])}>
                      <Check className={styles["check-icon"]} />
                    </Select.ItemIndicator>
                    <Select.ItemText className={clsx(styles["item-text"])}>{option.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectField;
