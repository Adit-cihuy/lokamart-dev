import Productcard from '@/components/fragments/card/Productcard'
import Title from '@/components/fragments/Title/Title'
import Category from '@/components/layout/main/card/Category'
import Services from '@/components/layout/main/card/Services'
import React from 'react'

export default function MainPage() {
  return (
    <div>
        <Category />
        <Title />
        <Productcard />
        <Services />
    </div>
  )
}
