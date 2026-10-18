import { Select } from "@base-ui/react";
import clsx from "clsx";
import { Check, ListChevronsUpDown } from "lucide-react";

import styles from "./SelectField.module.css";

interface SelectFieldProps {
	label: string;
	options: Array<{ label: string; value: string }>;
	defaultValue: string;
}

const SelectField = ({ label, options, defaultValue }: SelectFieldProps) => {
	return (
    <div className={clsx(styles["field"])}>
      <Select.Root items={options} defaultValue={defaultValue}>
        <Select.Label className={clsx(styles["label"])}>{label}</Select.Label>
        <Select.Trigger className={clsx(styles["select"])}>
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
