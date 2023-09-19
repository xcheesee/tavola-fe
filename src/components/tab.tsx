import React from "react";

export default function Tab({tabId, activeTab, children, onClick}: {tabId: number, activeTab: number, children: React.ReactNode, onClick: () => void}){
    return(
        <a 
            className={`tab tab-lg tab-bordered flex-1 ${activeTab === tabId ? "tab-active" : ""}`}
            onClick={onClick}
        >
            {children}
        </a>
         
    )
}