import React from "react";

export default function SimpleOverviewCard({ children }: { children: React.ReactNode}) {
   return(
        <div className="card px-4 py-8 bg-neutral-200">
            <div className="px-4 grid gap-x-8 grid-cols-[1fr_max-content]">
                { children }
            </div>
        </div>
   ) 
}