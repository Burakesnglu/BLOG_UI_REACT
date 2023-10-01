import React, { useState } from 'react'
import CreateTag from '../Tag/CreateTag'

export default function TagList() {

  return (
    <>

      <div className="grid grid-cols-1">
        <div className="col-span flex justify-between items-center">
          <span>Tag List</span>
          <CreateTag />
        </div>
      </div>


    </>
  )
}
