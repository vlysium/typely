import { useCallback, useImperativeHandle, useRef } from "react";

import { Combobox } from "@base-ui/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import clsx from "clsx";
import { CheckIcon, ListChevronsUpDown } from "lucide-react";

import styles from "./ComboboxField.module.css";

interface VirtualizedItem {
  value: string;
	label: string;
}

type Virtualizer = ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>;

interface ComboboxFieldProps {
	label: string;
	items: Array<VirtualizedItem>;
	defaultValue?: string;
}

const ComboboxField = ({ label, items, defaultValue }: ComboboxFieldProps) => {
	const virtualizerRef = useRef<Virtualizer | null>(null);

  return (
		<div className={clsx(styles["field"])}>
			<Combobox.Root virtualized items={items} defaultValue={defaultValue} onItemHighlighted={(item, { reason, index }) => {
				const virtualizer = virtualizerRef.current;

				if (!item || !virtualizer) {
					return;
				}

				const isStart = index === 0;
				const isEnd = index === virtualizer.options.count - 1;
				const shouldScroll = reason === "none" || (reason === "keyboard" && (isStart || isEnd));

				if (shouldScroll) {
					queueMicrotask(() => {
						virtualizer.scrollToIndex(index, { align: isEnd ? "start" : "end" });
					});
				}
			}}>
				<label className={clsx(styles["label"])}>
					{label}
				</label>
				<Combobox.Input className={clsx(styles["input"])} />

				<Combobox.Portal>
					<Combobox.Positioner className={clsx(styles["positioner"])} sideOffset={4}>
						<Combobox.Popup className={clsx(styles["popup"])}>
							<Combobox.Empty>
								<div className={clsx(styles["empty"])}>No items found.</div>
							</Combobox.Empty>
							<Combobox.List className={clsx(styles["list"])}>
								<VirtualizedList virtualizerRef={virtualizerRef} />
							</Combobox.List>
						</Combobox.Popup>
					</Combobox.Positioner>
				</Combobox.Portal>
			</Combobox.Root>
		</div>
  );
};

const VirtualizedList = ({ virtualizerRef }: { virtualizerRef: React.RefObject<Virtualizer | null> }) => {
  const filteredItems = Combobox.useFilteredItems<VirtualizedItem>();

  const scrollElementRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => 32,
    overscan: 20,
    paddingStart: 4,
    paddingEnd: 4,
    scrollPaddingEnd: 4,
    scrollPaddingStart: 4,
  });

  useImperativeHandle(virtualizerRef, () => virtualizer);

  const handleScrollElementRef = useCallback(
    (element: HTMLDivElement | null) => {
      scrollElementRef.current = element;
      if (element) virtualizer.measure();
    },
    [virtualizer],
  );

  const totalSize = virtualizer.getTotalSize();

  if (!filteredItems.length) {
    return null;
  }

  return (
    <div role="presentation" ref={handleScrollElementRef} className={clsx(styles["scroller"])} style={{ "--total-size": `${totalSize}px` } as React.CSSProperties }
    >
      <div role="presentation" className={clsx(styles["virtualized-placeholder"])} style={{ height: totalSize }}>
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = filteredItems[virtualItem.index];

          return (
            <Combobox.Item
              key={virtualItem.key}
              index={virtualItem.index}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              value={item}
              className={clsx(styles["item"])}
              aria-setsize={filteredItems.length}
              aria-posinset={virtualItem.index + 1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <Combobox.ItemIndicator className={clsx(styles["item-indicator"])}>
                <CheckIcon className={clsx(styles["check-icon"])} />
              </Combobox.ItemIndicator>
              <span className={clsx(styles["item-text"])}>{item.label}</span>
            </Combobox.Item>
          );
        })}
      </div>
    </div>
  );
};

export default ComboboxField;
