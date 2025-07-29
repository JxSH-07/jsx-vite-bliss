import React from 'react';

// --- SVG Icons for the form ---
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.197-4.358-2.622-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);

const EditProfile = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white font-sans">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Editing Company Profile</h1>
          <p className="text-sm text-gray-500">Edit details and click on save changes to apply</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button type="button" className="px-5 py-2 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 w-full">Cancel</button>
          <button type="submit" className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 w-full">Save changes</button>
        </div>
      </div>
      
      <hr className="mb-8" />

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Company Name*</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" defaultValue="Agdhi Technologies Private limited" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Brand Name*</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="Agdhi Technologies" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Choose Country*</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">CNN*</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" placeholder="Email address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Add Social Media link</label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FacebookIcon />
              </div>
              <input type="url" className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm" placeholder="Facebook Link" />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <InstagramIcon />
              </div>
              <input type="url" className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm" placeholder="Instagram Link" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Address*</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="504, Brigade Rubix, HMT Layout, Peenya, Bangalore 560015" />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Change Company Logo</label>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-grow w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                <UploadIcon />
                <p className="mt-2 text-sm"><span className="font-semibold text-indigo-600">Click to upload</span> or Drag and drop</p>
                <p className="text-xs mt-1">PNG, JPG, JPEG (max 5mb)</p>
              </div>
              <div className="flex-shrink-0 mx-auto sm:mx-0 mt-4 sm:mt-0">
                <p className="text-xs font-semibold text-gray-500 mb-1 text-center">Logo preview</p>
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border">
                  <img src="https://placehold.co/96x96/22C55E/FFFFFF?text=agdhi" alt="logo preview" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">About*</label>
            <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none" defaultValue="The quality of seeds has become a growing concern. The phenotypic defects of seeds are one of the criteria for judging the quality. The traditional method of detecting seed defects typically relies on manual inspection, which is inefficient and subjective. Therefore, an objective and automated seed screening method is required." />
            <p className="text-xs text-right text-gray-500 mt-1">42 characters remaining</p>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </div>
            <input type="url" className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm" defaultValue="https://aghiventures02/linkdin.com" />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.028 2.074 3.863-.764-.024-1.482-.234-2.11-.583v.062c0 2.248 1.595 4.123 3.713 4.557-.388.106-.796.163-1.214.163-.298 0-.588-.028-.875-.082.593 1.844 2.313 3.186 4.354 3.223-1.583 1.241-3.583 1.982-5.753 1.982-.374 0-.742-.022-1.105-.065 2.049 1.313 4.478 2.082 7.03 2.082 8.425 0 13.028-6.983 13.028-13.028v-.592c.894-.645 1.669-1.453 2.283-2.366z"/></svg>
            </div>
            <input type="url" className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm" placeholder="Twitter Link" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Pincode*</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" defaultValue="56001" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
