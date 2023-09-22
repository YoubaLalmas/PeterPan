import React from "react"
import SearchToolForm from "./SearchToolForm"

function SearchToolFormContainer() {
  return (
    <div className='w-3/4 md:w-2/3 mx-auto p-12'>
      <SearchToolForm
        title={"Equipment List"}
        buttonTitle={"Track"}
      />
      <div className='relative overflow-x-auto pt-5'>
        <table className='w-full text-sm text-left text-gray-600'>
          <thead className='text-xs text-gray-800 uppercase bg-gray-100'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3'>
                Serial Number
              </th>
              <th
                scope='col'
                className='px-6 py-3'>
                Equipment Type
              </th>
              <th
                scope='col'
                className='px-6 py-3'>
                Equipment Name
              </th>
              <th
                scope='col'
                className='px-6 py-3'>
                Status
              </th>
              <th
                scope='col'
                className='px-6 py-3'>
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b '>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                RB300173463SG
              </th>
              <td className='px-6 py-4'>Printer</td>
              <td className='px-6 py-4'>HP OfficeJet 8015e</td>
              <td className='px-6 py-4'>Processing</td>
              <td className='px-6 py-4'>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SearchToolFormContainer
