'use strict'

import React from 'react'

import { useCustomHook } from '../src/index' // Rename to your own hook name

import './styles/tailwind.css'
import './styles/index.scss'

export default () => {
  const customHook = useCustomHook()
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <h1 className='font-bold text-3xl flex-1'>{customHook}</h1>
      </div>
    </div>
  )
}
