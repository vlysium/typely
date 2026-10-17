import clsx from "clsx";

import styles from "./Sidebar.module.css";
import { NumberField } from "@/components/ui/forms";

const Sidebar = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<aside className={clsx(styles["sidebar"])}>
			<form className={clsx(styles["form"])} onSubmit={handleSubmit}>
				<NumberField label="Base size" defaultValue={16} step={0.5} suffix="px" />
			</form>
		</aside>
	);
};

export default Sidebar;
