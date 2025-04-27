import React, { useState } from 'react'


const IncidentDisplay = ({ incidentList, selectedSeverity, sortOrder }) => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div>
            {incidentList
                .filter((incident) => {
                    if (selectedSeverity === 'All') return true;
                    return incident.severity === selectedSeverity;
                })
                .sort((a, b) => {
                    if (sortOrder === 'Newest First') {
                        return new Date(b.reported_at) - new Date(a.reported_at);
                    } else {
                        return new Date(a.reported_at) - new Date(b.reported_at);
                    }
                })
                .map((incident) => (
                    <div
                        key={incident.id}
                        className="flex mt-4 justify-between items-start p-4 border-2 border-gray-300 rounded-md shadow-sm bg-white"
                    >
                        {/* Left Side */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                            <div className="text-sm sm:hidden my-2 text-gray-500 whitespace-nowrap">
                                    {new Date(incident.reported_at).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </div>
                            <div className="flex items-center gap-2 mt-1 mb-2">
                                <span
                                    className={`
                  text-xs font-semibold px-2 py-1 rounded 
                  ${incident.severity === 'High' ? 'bg-red-100 text-red-800' : ''}
                  ${incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${incident.severity === 'Low' ? 'bg-green-100 text-green-800' : ''}
                `}
                                >
                                    {incident.severity}
                                </span>
                                <span className="text-xs text-gray-500">Severity</span>
                            </div>

                            {/* Description */}
                            <p className={`text-sm text-gray-600 ${expandedId === incident.id ? '' : 'line-clamp-1'}`}>
                                {incident.description}
                            </p>


                            {/* Toggle Button */}
                            <button
                                className="mt-3 text-sm font-medium text-indigo-600 hover:underline cursor-pointer"
                                onClick={() => toggleExpand(incident.id)}
                            >
                                {expandedId === incident.id ? 'See Less' : 'See More'}
                            </button>
                        </div>

                        {/* Right Side */}
                        <div className="hidden sm:inline ml-4 text-sm text-gray-500 whitespace-nowrap">
                            {new Date(incident.reported_at).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default IncidentDisplay