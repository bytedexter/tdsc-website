import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: {new Date().getFullYear()}</p>
        <p className="text-slate-700 mb-4">
          This page describes how TDSC collects, uses, and protects information in the
          course of delivering data governance and automation services. It is intended
          for existing and prospective corporate clients.
        </p>
      </div>
    </main>
  );
};
