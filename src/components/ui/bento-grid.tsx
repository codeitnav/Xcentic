"use client"

import type React from "react"

import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:shadow-none cursor-pointer",
        className,
      )}
      style={{ backgroundColor: "#d7f5e9", color: "#000" }}
      onClick={onClick}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex items-center justify-between mb-2">
          {icon}
          <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center transition-transform duration-200 group-hover/bento:scale-110">
            <svg
              className="w-4 h-4 text-neutral-600 dark:text-neutral-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
        <div className="mt-2 mb-2 font-sans font-bold" style={{ color: "#000" }}>{title}</div>
        <div className="font-sans text-xs font-normal" style={{ color: "#000" }}>{description}</div>
      </div>
    </div>
  )
}
