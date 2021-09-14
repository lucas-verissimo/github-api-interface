import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 12px;
    width: 100%;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    background-color: white;
    margin: 0 0 8px 8px;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
    }
    &.is-selected {
        border-radius: 16px 16px 0 0;
        border-bottom: 1px solid white;
        margin-bottom: 0;
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    display: none;
    margin-top: -5px;
    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;