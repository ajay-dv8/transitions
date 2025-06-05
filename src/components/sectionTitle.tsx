import { Heart } from 'lucide-react'
import React from 'react'

interface SectionTitleProps {
  topTitle?: string;
  title: string;
  subTitle?: string
}

export default function SectionTitle({ topTitle, title, subTitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-600 mb-4">
        <Heart className="h-4 w-4" />
        {topTitle}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
        {title}
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
        {subTitle}
      </p>
    </div>
  )
}
