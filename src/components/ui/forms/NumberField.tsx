import { useId } from "react";

import clsx from "clsx";

import styles from "./NumberField.module.css";

interface NumberFieldProps {
	defaultValue: number;
	step?: number;
	label: string;
	suffix?: string;
}

const NumberField = ({ defaultValue, step = 1, label, suffix }: NumberFieldProps) => {
	const id = useId();

	return (
		<div className={clsx(styles["input-group"])}>
			<label className={clsx(styles["label"])} htmlFor={id}>
				{label}
			</label>
			<input
				id={id}
				className={clsx(styles["input"])}
				type="number"
				defaultValue={defaultValue}
				step={step}
				min={0}
				placeholder=" "
			/>
			{suffix && <span className={clsx(styles["suffix"])}>{suffix}</span>}
		</div>
	);
};

export default NumberField;
