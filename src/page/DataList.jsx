import React from 'react'
import CustomTable from '../assets/CustomTable '
import data from '../assets/data/data.json'
import { useLanguage } from '../context/hooks'

const DataList = () => {
  const { language } = useLanguage()
  const dataList = data.dataList
  return (
    <div className='flex flex-col items-center justify-center  '>
      <div className='text-slate-200 py-4'>
        <p className='text-4xl font-light underline underline-offset-8 decoration-0 p-6'>
          {data[language].dataList.title}
        </p>
      </div>
      <div className=''>
        <CustomTable
          data={dataList}
          languages={data}
        />
      </div>
    </div>
  )
}

export default DataList
