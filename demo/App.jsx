'use strict'

import React from 'react'

import { useDarkTheme } from '../src/index' // Rename to your own hook name

import './styles/tailwind.css'
import './styles/index.scss'

export default () => {
  const [theme, setTheme] = useDarkTheme()
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <h1 className='font-bold text-3xl flex-1'>useDarkTheme</h1>
        <button
          className='mt-2 text-xl'
          onClick={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          Go to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
      </div>
    </div>
  )
}
