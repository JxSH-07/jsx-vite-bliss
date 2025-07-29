import React, { useState } from 'react';

// --- SVG Icons ---
const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);
const SocialIcon = ({ type }) => {
    const icons = {
        linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>,
        twitter: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.028 2.074 3.863-.764-.024-1.482-.234-2.11-.583v.062c0 2.248 1.595 4.123 3.713 4.557-.388.106-.796.163-1.214.163-.298 0-.588-.028-.875-.082.593 1.844 2.313 3.186 4.354 3.223-1.583 1.241-3.583 1.982-5.753 1.982-.374 0-.742-.022-1.105-.065 2.049 1.313 4.478 2.082 7.03 2.082 8.425 0 13.028-6.983 13.028-13.028v-.592c.894-.645 1.669-1.453 2.283-2.366z"/></svg>,
        website: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
        instagram: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.197-4.358-2.622-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
    };
    return icons[type] || null;
};

// This is the updated Header component using an SVG background
const Header = () => (
  <div className="relative h-48 md:h-52">
    {/* The SVG is used as an image, stretching to cover the container */}
    <img 
      src="/23.svg" 
      alt="Header background pattern" 
      className="absolute inset-0 w-full h-full object-cover" 
      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x208/E0E7FF/4F46E5?text=Header+Background'; }}
    />
    
    {/* The rest of the header content is positioned on top */}
    <div className="absolute top-24 md:top-28 left-0 right-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-end">
        <div className="bg-white p-1 rounded-md shadow-lg">
          <div className="h-20 w-20 md:h-24 md:w-24 bg-green-800 flex items-center justify-center rounded-sm">
            <span className="text-white text-3xl font-bold">agdhi</span>
          </div>
        </div>
        <div className="ml-4 -mb-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Agdhi Ventures</h1>
          <p className="text-sm text-gray-600">Startup</p>
          <span className="mt-1 inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            Profile Created
          </span>
        </div>
        <div className="ml-auto mb-2">
          <button className="bg-white text-gray-700 hover:bg-gray-50 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm flex items-center text-sm">
            <PencilIcon />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  </div>
);


const ProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Engagements', 'Funding', 'Documents', 'Logs'];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Use the new Header component */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="flex items-center h-16 mt-8">
            <div className="flex items-baseline space-x-6">
              {tabs.map((tab) => (
                <a
                  key={tab}
                  href="#"
                  onClick={() => setActiveTab(tab)}
                  className={`px-1 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {tab === 'Engagements' && <span className="ml-2 bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">0</span>}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Complete Profile Card */}
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <button className="bg-white p-2 rounded-full border-2 border-gray-200 mr-4">
                    <ArrowRightIcon />
                  </button>
                  <div>
                    <h3 className="font-bold text-gray-800">Complete profile</h3>
                    <p className="text-sm text-gray-600">Add Basic Details and complete profile. Only Completed profile can be engaged.</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img src="https://placehold.co/80x80/C4B5FD/3730A3?text=+" alt="Illustration" className="rounded-md" onError={(e) => e.target.src='https://placehold.co/80x80/E2E8F0/4A5568?text=Img'}/>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  The quality of seeds has become a growing concern. The phenotypic defects of seeds are one of the criteria for judging the quality. The traditional method of detecting seed defects typically relies on manual inspection, which is inefficient and subjective. Therefore, an objective and automated seed screening method is required.
                </p>
              </div>

              {/* Details Grid */}
              <div className="text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Brand Name</h4>
                    <p className="text-gray-800 mt-1">Agdhi Ventures</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company Registered Name</h4>
                    <p className="text-gray-800 mt-1">Agdhi Ventures Private Limited</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company URL</h4>
                    <a href="https://www.agdhiventures.com" className="text-blue-600 hover:underline mt-1 block">https://www.agdhiventures.com</a>
                  </div>
                   <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Incorporated At</h4>
                    <p className="text-gray-800 mt-1">India</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">CIN</h4>
                    <p className="text-gray-800 mt-1">U72900KA2020PTC134237</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pincode</h4>
                    <p className="text-gray-800 mt-1">560013</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Address</h4>
                  <p className="text-gray-800">504, Brigade Rubix, HMT Layout, Peenya, Bangalore 560015</p>
                </div>
                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Social Media</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-400"><SocialIcon type="instagram"/></div>
                      <a href="https://instagram.com/agdhiventures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">https://instagram.com/agdhiventures</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-400"><SocialIcon type="website"/></div>
                      <a href="https://www.agdhiventures.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">https://www.agdhiventures.com</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-400"><SocialIcon type="twitter"/></div>
                      <a href="https://twitter.com/agdhiventures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">https://twitter.com/agdhiventures</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-400"><SocialIcon type="linkedin"/></div>
                      <a href="https://linkedin.com/in/agdhiventures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">https://linkedin.com/in/agdhiventures</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-gray-800">Associated Members</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center">
                    <PlusIcon />
                    Add member
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                       <img className="h-10 w-10 rounded-full object-cover" src="https://placehold.co/40x40/E2E8F0/4A5568?text=KJ" alt="Kaushik Jain" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Kaushik Jain</p>
                        <p className="text-xs text-gray-500">Co-founder</p>
                      </div>
                    </div>
                    <div className="flex space-x-3 text-gray-400">
                      <a href="#" className="hover:text-blue-700"><SocialIcon type="linkedin" /></a>
                      <a href="#" className="hover:text-blue-500"><SocialIcon type="twitter" /></a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                       <img className="h-10 w-10 rounded-full object-cover" src="https://placehold.co/40x40/E2E8F0/4A5568?text=SP" alt="Sushmita Pathak" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Sushmita Pathak</p>
                        <p className="text-xs text-gray-500">Employee</p>
                      </div>
                    </div>
                    <div className="flex space-x-3 text-gray-400">
                      <a href="#" className="hover:text-blue-700"><SocialIcon type="linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-gray-800">Referred By</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center">
                    <PlusIcon />
                    Add reference
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center text-center text-gray-500 py-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <p className="text-sm">No reference Added</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileDashboard;
