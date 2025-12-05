import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertCircle, MessageSquare, CheckCircle } from 'lucide-react';
import { ContactFormState, ComplaintFormState, IssueType } from '../types';

export const ContactHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'query' | 'complaint'>('query');
  const [submitted, setSubmitted] = useState(false);

  // Form States
  const [queryForm, setQueryForm] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [complaintForm, setComplaintForm] = useState<ComplaintFormState>({ 
    name: '', email: '', batchNumber: '', issueType: 'taste', details: '' 
  });

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    // Reset form
    setQueryForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    // Reset form
    setComplaintForm({ name: '', email: '', batchNumber: '', issueType: 'taste', details: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-brand-cream min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-brand-brown">We're Here For You</h2>
          <p className="mt-4 text-brand-brown/70">Whether it's love or a concern, we want to hear it.</p>
        </div>

        {/* Tabs */}
        <div className="flex p-1 bg-white rounded-xl shadow-sm border border-brand-brown/10 mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('query')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'query' 
                ? 'bg-brand-brown text-white shadow-md' 
                : 'text-brand-brown/60 hover:text-brand-brown hover:bg-brand-brown/5'
            }`}
          >
            <MessageSquare className="w-4 h-4" /> General Query
          </button>
          <button
            onClick={() => setActiveTab('complaint')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'complaint' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'text-brand-brown/60 hover:text-brand-red hover:bg-brand-red/5'
            }`}
          >
            <AlertCircle className="w-4 h-4" /> Raise Complaint
          </button>
        </div>

        {/* Forms Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-brand-brown/5 overflow-hidden min-h-[500px] relative">
            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-brown mb-2">Message Received</h3>
                        <p className="text-brand-brown/60">Thank you for reaching out. We will get back to you shortly.</p>
                    </motion.div>
                ) : activeTab === 'query' ? (
                <motion.form
                    key="query"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleQuerySubmit}
                    className="p-8 md:p-12 space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-brown">Name</label>
                            <input 
                              required 
                              type="text" 
                              value={queryForm.name}
                              onChange={(e) => setQueryForm({...queryForm, name: e.target.value})}
                              className="w-full p-4 rounded-xl bg-brand-cream/30 border border-brand-brown/10 focus:border-brand-brown focus:ring-0 outline-none transition-colors" 
                              placeholder="John Doe" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-brown">Email</label>
                            <input 
                              required 
                              type="email" 
                              value={queryForm.email}
                              onChange={(e) => setQueryForm({...queryForm, email: e.target.value})}
                              className="w-full p-4 rounded-xl bg-brand-cream/30 border border-brand-brown/10 focus:border-brand-brown focus:ring-0 outline-none transition-colors" 
                              placeholder="john@example.com" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-brown">Message</label>
                        <textarea 
                          required 
                          rows={5} 
                          value={queryForm.message}
                          onChange={(e) => setQueryForm({...queryForm, message: e.target.value})}
                          className="w-full p-4 rounded-xl bg-brand-cream/30 border border-brand-brown/10 focus:border-brand-brown focus:ring-0 outline-none transition-colors" 
                          placeholder="How can we sweeten your day?" 
                        />
                    </div>
                    <button type="submit" className="w-full py-4 bg-brand-brown text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        Send Message <Send className="w-5 h-5" />
                    </button>
                </motion.form>
                ) : (
                <motion.form
                    key="complaint"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleComplaintSubmit}
                    className="p-8 md:p-12 space-y-6"
                >
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">We are incredibly sorry for your experience. Please provide details so we can make it right immediately.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-brown">Name</label>
                            <input 
                              required 
                              type="text" 
                              value={complaintForm.name}
                              onChange={(e) => setComplaintForm({...complaintForm, name: e.target.value})}
                              className="w-full p-4 rounded-xl bg-white border border-brand-brown/10 focus:border-brand-red focus:ring-0 outline-none transition-colors" 
                              placeholder="Jane Doe" 
                            />
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-brown">Batch Number (Optional)</label>
                            <input 
                              type="text" 
                              value={complaintForm.batchNumber}
                              onChange={(e) => setComplaintForm({...complaintForm, batchNumber: e.target.value})}
                              className="w-full p-4 rounded-xl bg-white border border-brand-brown/10 focus:border-brand-red focus:ring-0 outline-none transition-colors" 
                              placeholder="e.g. B-2023-X" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-brown">Issue Type</label>
                        <select 
                          value={complaintForm.issueType}
                          onChange={(e) => setComplaintForm({...complaintForm, issueType: e.target.value as IssueType})}
                          className="w-full p-4 rounded-xl bg-white border border-brand-brown/10 focus:border-brand-red focus:ring-0 outline-none transition-colors text-brand-brown"
                        >
                            <option value="taste">Taste / Quality</option>
                            <option value="packaging">Packaging / Leakage</option>
                            <option value="delivery">Delivery Issue</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-brown">Details</label>
                        <textarea 
                          required 
                          rows={4} 
                          value={complaintForm.details}
                          onChange={(e) => setComplaintForm({...complaintForm, details: e.target.value})}
                          className="w-full p-4 rounded-xl bg-white border border-brand-brown/10 focus:border-brand-red focus:ring-0 outline-none transition-colors" 
                          placeholder="Please describe what went wrong..." 
                        />
                    </div>
                    
                    <button type="submit" className="w-full py-4 bg-brand-red text-white rounded-xl font-bold text-lg hover:bg-red-800 transition-colors shadow-lg shadow-red-200">
                        Submit Priority Complaint
                    </button>
                </motion.form>
                )}
            </AnimatePresence>
        </div>

      </div>
    </div>
  );
};