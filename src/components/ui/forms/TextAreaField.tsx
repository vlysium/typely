import clsx from "clsx";

import styles from "./TextAreaField.module.css";

interface TextAreaFieldProps {
	value: string;
	label: string;
	setValue: (value: string) => void;
}

const TextAreaField = ({ value, setValue, label }: TextAreaFieldProps) => {
	return (
		<div className={clsx(styles["input-group"])}>
			<label className={clsx(styles["label"])}>
				{label}
			</label>
			<textarea
				className={clsx(styles["input"])}
				value={value}
				onChange={(e) => setValue(e.target.value.replace(/[\r\n]+/g, ""))}
				placeholder=" "
				maxLength={50}
			/>
		</div>
	);
};

export default TextAreaField;
