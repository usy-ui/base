"use client";
import { forwardRef, ReactNode, useState } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../@types";

export type TabItemType = {
  id: string;
  label: string | ReactNode;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItemType[];
  tabId?: string;
  willMounted?: boolean;
} & CommonCompProps;

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { name = "tabs", tabs, tabId, willMounted = true, className, testId = name },
  ref
) {
  const [activeTabId, setActiveTabId] = useState(tabId || tabs[0].id);

  const changeTab = (selectedId: string) => {
    setActiveTabId(selectedId);
  };

  const renderTabList = () => {
    return (
      <div className="tab-list-container">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => changeTab(id)}
            className={clsx("tab-item", {
              activated: id === activeTabId,
            })}
          >
            {label}
          </button>
        ))}
      </div>
    );
  };

  const renderActiveContent = () => {
    if (willMounted) {
      const activeTab = tabs.find(({ id }) => id === activeTabId) || tabs[0];
      return (
        <div className="active-content-container">{activeTab.content}</div>
      );
    }

    return tabs.map((tab) => (
      <div
        key={tab.id}
        className={clsx("active-content-container", {
          hidden: tab.id !== activeTabId,
        })}
      >
        {tab.content}
      </div>
    ));
  };

  return (
    <div
      ref={ref}
      className={clsx("usy-tabs-container", className)}
      data-testid={testId}
    >
      {renderTabList()}
      {renderActiveContent()}
    </div>
  );
});
