import { Collapsible } from "@base-ui/react";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

import styles from "./Details.module.css";

interface DetailsProps {
	children: React.ReactNode;
	summary: string;
	defaultOpen?: boolean;
}

const Details = ({ children, summary, defaultOpen }: DetailsProps) => {
	return (
		<Collapsible.Root className={clsx(styles["collapsible"])} defaultOpen={defaultOpen}>
      <Collapsible.Trigger className={clsx(styles["trigger"])}>
        {summary}
				<ChevronRight className={clsx(styles["icon"])} />
      </Collapsible.Trigger>
      <Collapsible.Panel className={clsx(styles["panel"])}>
				<div className={clsx(styles["content"])}>{children}</div>
      </Collapsible.Panel>
    </Collapsible.Root>
	);
};

export default Details;
