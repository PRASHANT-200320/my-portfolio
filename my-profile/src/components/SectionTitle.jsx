import React from 'react';

// A reusable component for consistent section headings.
const SectionTitle = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center relative mb-12 text-white">
        {children}
    </h2>
);

export default SectionTitle;