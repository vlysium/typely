import { Tabs } from "@base-ui/react";
import clsx from "clsx";

import styles from "./Board.module.css";
import { ScalePreview } from "./tabs";

const tabs = [
	{
		value: "scale-preview",
		label: "Scale Preview",
		render: <ScalePreview />,
	},
	{
		value: "tab-2",
		label: "Tab 2",
		render: <div>Tab 2 content</div>,
	},
	{
		value: "tab-3",
		label: "Tab 3",
		render: <div>Tab 3 content</div>,
	},
];

const Board = () => {
	return (
		<div className={clsx(styles["board"])}>
			<Tabs.Root className={clsx(styles["root"])} defaultValue={tabs[0].value}>
				<Tabs.List className={clsx(styles["list"])} role="tablist" render={<nav />}>
					{tabs.map((tab) => (
						<Tabs.Tab key={tab.value} className={clsx(styles["tab"])} value={tab.value} role="tab">
							{tab.label}
						</Tabs.Tab>
					))}
					<Tabs.Indicator className={clsx(styles["indicator"])} />
				</Tabs.List>
				<main className={clsx(styles["content"])}>
					{tabs.map((tab) => (
						<Tabs.Panel key={tab.value} className={clsx(styles["panel"])} value={tab.value} role="tabpanel">
							{tab.render}
						</Tabs.Panel>
					))}
				</main>
			</Tabs.Root>
		</div>
	);
};

export default Board;
