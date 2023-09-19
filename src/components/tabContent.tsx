import React from "react";

export default function TabContent({tabId, activeTab, children, className=""}: {tabId: number, activeTab: number, children: React.ReactNode, className?: string}){
    return(
        <div className={`${activeTab === tabId ? "" : "hidden"} ${className}`}>{children}</div>
    )

}