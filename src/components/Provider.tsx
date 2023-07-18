'use client'
import React from 'react'

type Props = {
  children: React.ReactNode
}
export default function Provider({children}:Props) {
  return (
    <div>Provider</div>
  )
}
