import React from "react";

export default function Layout({ children }: { children: React.ReactNode}) {
    return(
        <div className="grid relative h-full ">
            { children }
        </div>
    )
}