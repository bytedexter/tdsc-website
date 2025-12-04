import React from 'react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <main className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: {new Date().getFullYear()}</p>
        <p className="text-slate-700 mb-4">
          These terms govern the use of TDSC platforms, products, and
          professional services. By engaging with TDSC, your organization agrees
          to operate within the controls and responsibilities outlined here.
        </p>
      </div>
    </main>
  );
};
