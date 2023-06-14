import React from 'react'
import Layout from '../Layout/Layout'

interface DateTypes {
    new(): Date;
    new(value: number | string): Date;
    new(year: number, month: number, date?: number): Date;
}

export default function Calendar() {
  const now = new Date();
  const localDate = now.toLocaleDateString();
  return (
    <Layout>
      <div className='flex flex-col justify-between pr-8 md:pr-20'>
        <h1 className='text-xl md:text-3xl font-bold'>Calendar</h1>
        <div className='mt-5'>{localDate}</div>
      </div>
    </Layout>
  )
}