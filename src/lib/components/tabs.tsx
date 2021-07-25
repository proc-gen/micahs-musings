import React from 'react';

import { TabsProps, useColorModeValue, Tabs, Tab, TabList, TabPanels, TabPanel, useColorMode } from '@chakra-ui/react';

export interface TabData {
  label: JSX.Element | string;
  panel: JSX.Element;
}

export interface ITabsProps {
  tabData: Array<TabData>;
}

export const StyledTabs: React.FC<ITabsProps> = ({ tabData, ...props }) => {
  const tabSelectedColor = useColorModeValue('green.500', 'green.500');
  const tabSelectedFontColor = useColorModeValue('green.700', 'green.300');
  const tabHoverBorderColor = useColorModeValue('green.500', 'green.300');
  return (
    <Tabs variant="enclosed-colored">
      <TabList>
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            border="none"
            _selected={{ color: tabSelectedFontColor, border: '2px solid', borderColor: tabSelectedColor }}
            _focus={{ color: tabSelectedFontColor, border: '2px solid', borderColor: tabSelectedColor }}
            _hover={{ color: tabSelectedFontColor, border: '2px solid', borderColor: tabHoverBorderColor }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabData.map((tab, index) => (
          <TabPanel key={index}>{tab.panel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
