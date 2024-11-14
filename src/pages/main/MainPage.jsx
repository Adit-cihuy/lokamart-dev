import SectionCategory from '@/components/fragments/section/SectionCategory'
import SectionFeatured from '@/components/fragments/section/SectionFeatured'
import SectionLayanan from '@/components/fragments/section/SectionLayanan'
import SectionMonth from '@/components/fragments/section/SectionMonth'
import SectionProducts from '@/components/fragments/section/SectionProducts'
import React from 'react'

export default function MainPage() {
  return (
    <div className='space-y-4'>
      <SectionProducts />
      <SectionCategory />
      <SectionMonth />
      <SectionFeatured />
      <SectionLayanan />
    </div>
  )
}
