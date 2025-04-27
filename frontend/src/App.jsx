import React, { useState } from 'react'
import IncidentDisplay from './Components/IncidentDisplay'
import ReportIncident from './Components/ReportIncident'
import { incident_list } from "./assets/assets"

const App = () => {
  const [incidentList, setIncidentList] = useState([...incident_list]);
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest First');

  return (
    <div className='md:h-screen bg-[#F8F8F8] p-10 flex flex-col'>
      <h1 className='text-3xl font-semibold'>AI Safety Incident Dashboard</h1>

      <div className='flex flex-col-reverse sm:flex-row flex-1 mt-8 gap-5 overflow-hidden'>
        {/* Incident list and filter */}
        <div className='bg-[white] sm:w-[60%] p-5 border-2 border-gray-300 rounded-md flex flex-col '>

          {/* Filters */}
          <div class="flex flex-col sm:flex-row gap-4 items-start ">
            <div className='w-[100%] sm:w-[50%]'>
              <label class="block text-sm font-medium text-gray-700 mb-1">Filter by Severity</label>
              <select
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
              >
                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div className='w-[100%] sm:w-[50%]'>
              <label class="block text-sm font-medium text-gray-700 mb-1">Sort by Date</label>
              <select
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          {/* Incident list */}
          <div className="flex-1 mt-5 overflow-y-auto no-scroll">
            <IncidentDisplay incidentList={incidentList} selectedSeverity={selectedSeverity} sortOrder={sortOrder}/>
          </div>
        </div>

        {/* Report incident form */}
        <div className='bg-[white] h-fit sm:w-[40%] p-5 border-2 border-gray-300 rounded-md'>
          <ReportIncident setIncidentList={setIncidentList} incidentList={incidentList} />
        </div>
      </div>
    </div>
  )
}

export default App