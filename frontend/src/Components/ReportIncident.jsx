import React, {useState} from 'react'

const ReportIncident = ({setIncidentList, incidentList}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        severity: 'Low',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newIncident = {
            id: incidentList.length+1, 
            title: formData.title,
            description: formData.description,
            severity: formData.severity,
            reported_at: new Date().toISOString(),
          };

          console.log(newIncident);
          setIncidentList(prevList => [newIncident, ...prevList]); 
          
          setFormData({
            title: '',
            description: '',
            severity: 'Low',
          });
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Report New Incident</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm resize-none"
                        required
                    />
                </div>

                {/* Severity */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Severity</label>
                    <div className="flex items-center gap-4">
                        {['Low', 'Medium', 'High'].map((level) => (
                            <label key={level} className="flex items-center gap-1 text-sm text-gray-700">
                                <input
                                    type="radio"
                                    name="severity"
                                    value={level}
                                    checked={formData.severity === level}
                                    onChange={handleChange}
                                    className="text-indigo-600 focus:ring-indigo-500"
                                />
                                {level}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReportIncident