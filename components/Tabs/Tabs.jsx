import cn from 'clsx';

import Link from 'next/link';

import styles from './Tabs.module.scss';

const Tabs = ({ tabList, value, onChange, classNameMap = {} }) => {
  const tabListElement = tabList.reduce(
    (
      { tabSection, panelSection },
      { id, path, tabChildren, panelChildren }
    ) => {
      const TagName = path ? Link : div;
      const tagProps = path ? { href: path } : { onClick: () => onChange(id) };

      return {
        tabSection: [
          ...tabSection,
          <TagName
            key={id}
            className={cn(
              styles.tabSection,
              {
                [styles.selectedTab]: id === value,
              },
              classNameMap.tabSection
            )}
            {...tagProps}
          >
            {tabChildren}
          </TagName>,
        ],
        panelSection: [...panelSection, <div key={id}>{panelChildren}</div>],
      };
    },
    {
      tabSection: [],
      panelSection: [],
    }
  );

  return (
    <div className={styles.root}>
      <div className={cn(styles.tabListSection, classNameMap.tabListSection)}>
        {tabListElement.tabSection}
      </div>
      {tabListElement.panelSection}
    </div>
  );
};

export default Tabs;
