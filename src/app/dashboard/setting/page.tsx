'use client'
import { UserProfile } from '@clerk/nextjs'
import React, { useContext, useEffect } from 'react'

function Setting() {
  return (
    <div className='min-h-[90vh] flex items-center justify-center'><UserProfile routing='hash'/></div>
  )
}

export default Setting