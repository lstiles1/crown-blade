import React, { useState, useEffect } from 'react';
import { Service } from '../types';
import { Calendar as CalendarIcon, User, Mail, Phone, ChevronRight, Check, Clock, CreditCard, AlertCircle, ArrowLeft } from 'lucide-react';

interface BookingFormProps {
  selectedServiceId: string | null;
  services: Service[];
}

type Step = 'details' | 'datetime' | 'review' | 'success';

const BookingForm: React.FC<BookingFormProps> = ({ selectedServiceId, services }) => {
  const [step, setStep] = useState<Step>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: selectedServiceId || '',
    notes: ''
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate next 14 days for calendar
  const [dates, setDates] = useState<Date[]>([]);
  
  useEffect(() => {
    const nextDates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      nextDates.push(d);
    }
    setDates(nextDates);
  }, []);

  useEffect(() => {
    if (selectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 'details') setStep('datetime');
    else if (step === 'datetime') setStep('review');
  };

  const handleBack = () => {
    if (step === 'datetime') setStep('details');
    else if (step === 'review') setStep('datetime');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStep('success'), 1000);
  };

  const selectedService = services.find(s => s.id === formData.serviceId);

  // Progress Bar Component
  const ProgressBar = () => {
    const steps = ['details', 'datetime', 'review'];
    const currentIdx = steps.indexOf(step);
    
    return (
      <div className="mb-8 px-2" aria-hidden="true">
        <div className="flex justify-between mb-2">
          {['Details', 'Date & Time', 'Confirm'].map((label, idx) => (
            <span 
              key={label} 
              className={`text-xs font-bold uppercase tracking-wider ${idx <= currentIdx ? 'text-brand-600' : 'text-stone-300'}`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="h-1 bg-stone-100 rounded-full w-full overflow-hidden">
          <div 
            className="h-full bg-brand-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIdx + 1) / 3) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // Render Functions
  const renderSuccess = () => (
    <div className="bg-white p-12 rounded-sm shadow-2xl border-t-4 border-brand-500 text-center animate-in fade-in zoom-in duration-500" role="alert">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
        <Check className="h-12 w-12 text-green-600" aria-hidden="true" />
      </div>
      <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">Application Received</h3>
      <p className="text-stone-600 mb-8 max-w-lg mx-auto leading-relaxed">
        Welcome, {formData.name}. We've received your application for 
        <span className="font-semibold text-brand-600 block mt-2 text-xl">
          {selectedService?.title || 'Barber Program'}
        </span>
        <br/>
        <span className="text-sm mt-4 block text-stone-500 bg-stone-50 py-2 rounded">
          Interview Requested: {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
        </span>
      </p>
      <button 
        onClick={() => { 
          setStep('details'); 
          setFormData({...formData, serviceId: ''}); 
          setSelectedDate(null);
          setSelectedTime(null);
        }}
        className="text-stone-400 font-medium hover:text-stone-900 underline text-sm transition-colors"
      >
        Start another application
      </button>
    </div>
  );

  const renderDetails = () => (
    <form onSubmit={handleNext} className="bg-white rounded-sm p-8 md:p-10 shadow-2xl text-stone-900 animate-in slide-in-from-right-8 duration-300 relative">
      <ProgressBar />
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-stone-900">Step 1: Your Details</h3>
        <p className="text-stone-500 text-sm mt-1">Tell us who you are and what you want to study.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="group">
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-2 group-focus-within:text-brand-600 transition-colors font-semibold">Full Name <span className="text-red-500" aria-label="required">*</span></label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-5 w-5 text-stone-400 group-focus-within:text-brand-500 transition-colors pointer-events-none" aria-hidden="true" />
            <input 
              id="name"
              required
              type="text" 
              className="w-full pl-10 pr-4 py-3 bg-stone-50 border-2 border-stone-200 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all rounded-sm font-medium placeholder-stone-400"
              placeholder="James Carter"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              aria-required="true"
            />
          </div>
        </div>
        <div className="group">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-2 group-focus-within:text-brand-600 transition-colors font-semibold">Email Address <span className="text-red-500" aria-label="required">*</span></label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-stone-400 group-focus-within:text-brand-500 transition-colors pointer-events-none" aria-hidden="true" />
            <input 
              id="email"
              required
              type="email" 
              className="w-full pl-10 pr-4 py-3 bg-stone-50 border-2 border-stone-200 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all rounded-sm font-medium placeholder-stone-400"
              placeholder="james@example.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              aria-required="true"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="group">
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-2 group-focus-within:text-brand-600 transition-colors font-semibold">Phone Number <span className="text-red-500" aria-label="required">*</span></label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-stone-400 group-focus-within:text-brand-500 transition-colors pointer-events-none" aria-hidden="true" />
            <input 
              id="phone"
              required
              type="tel" 
              className="w-full pl-10 pr-4 py-3 bg-stone-50 border-2 border-stone-200 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all rounded-sm font-medium placeholder-stone-400"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              aria-required="true"
            />
          </div>
        </div>
        <div className="group">
          <label htmlFor="course" className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-2 group-focus-within:text-brand-600 transition-colors font-semibold">Course of Interest <span className="text-red-500" aria-label="required">*</span></label>
          <div className="relative">
            <select 
              id="course"
              required
              className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-200 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all appearance-none rounded-sm font-medium cursor-pointer pr-10 placeholder-stone-500"
              value={formData.serviceId}
              onChange={e => setFormData({...formData, serviceId: e.target.value})}
              aria-required="true"
            >
              <option value="" disabled>Select a program...</option>
              {services.map(s => (
                <option key={s.id} value={s.id}>{s.title} - {s.price}</option>
              ))}
            </select>
            <ChevronRight className="absolute right-4 top-4 h-4 w-4 text-stone-400 rotate-90 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-stone-900 text-white font-bold text-lg py-4 hover:bg-brand-600 active:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 mt-4"
      >
        Select Interview Date
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  );

  const renderDateTime = () => (
    <div className="bg-white rounded-sm p-8 md:p-10 shadow-2xl text-stone-900 animate-in slide-in-from-right-8 duration-300 relative">
      <ProgressBar />
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-serif font-bold text-stone-900">Step 2: Interview Time</h3>
          <p className="text-stone-500 text-sm mt-1">Choose a time to visit the academy for your interview.</p>
        </div>
      </div>

      {/* Date Scroller */}
      <div className="mb-8" role="group" aria-label="Select interview date">
        <label className="block text-xs font-bold uppercase tracking-wide text-stone-500 mb-4 font-semibold">Select Date <span className="text-red-500" aria-label="required">*</span></label>
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {dates.map((date, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
              aria-label={`Select ${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`}
              aria-pressed={selectedDate?.toDateString() === date.toDateString()}
              className={`flex-shrink-0 w-24 h-28 rounded-lg border-2 flex flex-col items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 snap-center font-medium ${
                selectedDate?.toDateString() === date.toDateString()
                  ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-lg transform scale-105'
                  : 'border-stone-200 bg-white text-stone-600 hover:border-brand-300 hover:shadow-md'
              }`}
            >
              <span className="text-xs uppercase font-bold tracking-wide">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
              <span className="text-2xl font-bold font-serif my-1">{date.getDate()}</span>
              <span className="text-xs font-semibold">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Grid */}
      <div className={`mb-8 transition-all duration-300 ${!selectedDate ? 'opacity-50 pointer-events-none' : 'opacity-100'}`} role="group" aria-label="Select interview time">
        <label className="block text-xs font-bold uppercase tracking-wide text-stone-500 mb-4 font-semibold">Available Times <span className="text-red-500" aria-label="required">*</span></label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'].map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTime(time)}
              disabled={!selectedDate}
              aria-label={`Select ${time}`}
              aria-pressed={selectedTime === time}
              className={`py-3 px-2 text-sm font-semibold rounded-md border transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 ${
                selectedTime === time
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md transform scale-105'
                  : !selectedDate 
                    ? 'bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          type="button"
          onClick={handleBack}
          aria-label="Go back to previous step"
          className="px-6 py-4 bg-stone-100 text-stone-700 font-bold rounded-sm hover:bg-stone-200 transition-all focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          <span>Back</span>
        </button>
        <button 
          type="button"
          onClick={handleNext}
          disabled={!selectedDate || !selectedTime}
          className="flex-1 bg-stone-900 text-white font-bold text-lg py-4 hover:bg-brand-600 disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center gap-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Review Application
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="bg-white rounded-sm p-8 md:p-10 shadow-2xl text-stone-900 animate-in slide-in-from-right-8 duration-300 relative">
      <ProgressBar />
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-stone-900">Step 3: Confirm</h3>
        <p className="text-stone-500 text-sm mt-1">Please review your details before submitting.</p>
      </div>

      {/* Summary Card */}
      <div className="bg-stone-50 rounded-lg border border-stone-200 overflow-hidden mb-8">
        {selectedService && (
          <div className="relative h-24 w-full">
            <img 
              src={selectedService.image} 
              alt=""
              role="presentation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/60 flex items-center px-6">
              <h4 className="text-white font-serif font-bold text-xl">{selectedService.title}</h4>
            </div>
          </div>
        )}
        
        <div className="p-6 space-y-4">
           <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-md border border-stone-100 shadow-sm" aria-hidden="true">
                <CalendarIcon className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-stone-400">Interview Date</p>
                <p className="font-semibold text-stone-900">
                  {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <p className="text-sm text-stone-600">{selectedTime}</p>
              </div>
           </div>

           <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-md border border-stone-100 shadow-sm" aria-hidden="true">
                <CreditCard className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-stone-400">Tuition</p>
                <p className="font-semibold text-stone-900">{selectedService?.price}</p>
                <p className="text-sm text-stone-600">{selectedService?.duration}</p>
              </div>
           </div>

           <div className="flex items-start gap-4 pt-4 border-t border-stone-200">
              <div className="bg-white p-2 rounded-md border border-stone-100 shadow-sm" aria-hidden="true">
                <User className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-stone-400">Applicant</p>
                <p className="font-semibold text-stone-900">{formData.name}</p>
                <p className="text-sm text-stone-600">{formData.email}</p>
                <p className="text-sm text-stone-600">{formData.phone}</p>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-brand-50 p-4 rounded-md flex gap-3 mb-8 border border-brand-100" role="note">
        <AlertCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-xs text-brand-900 leading-relaxed font-medium">
          By submitting this form, you agree to receive text messages and emails from Crown & Blade Academy regarding your application.
        </p>
      </div>

      <div className="flex gap-4">
        <button 
          type="button"
          onClick={handleBack}
          aria-label="Go back to previous step"
          className="px-6 py-4 bg-stone-100 text-stone-700 font-bold rounded-sm hover:bg-stone-200 transition-all focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          <span>Back</span>
        </button>
        <button 
          onClick={handleSubmit}
          className="flex-1 bg-brand-600 text-white font-bold text-lg py-4 hover:bg-brand-700 active:bg-brand-800 transition-all shadow-lg flex items-center justify-center gap-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Confirm Booking
          <Check className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="book" className="py-24 bg-stone-900 text-white relative overflow-hidden min-h-[800px]" aria-label="Booking Form">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-stone-800/40 -skew-x-12 translate-x-32 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-brand-500 font-bold tracking-widest uppercase text-xs">Start Your Career</h2>
            <h3 className="text-5xl font-serif font-bold leading-none">Ready to hold the clippers?</h3>
            <p className="text-stone-400 text-lg leading-relaxed">
              Complete the form to schedule a campus tour and interview. Spots for the upcoming cohort are limited.
            </p>
            
            <div className="bg-stone-800/80 p-8 rounded-sm border-l-4 border-brand-500 mt-8 backdrop-blur-sm" aria-label="Application steps">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm border-b border-stone-700 pb-2">Application Steps</h4>
              <div className="space-y-8 relative">
                {/* Connector Line */}
                <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-stone-700 z-0"></div>

                <div className={`flex gap-4 items-start relative z-10`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border transition-colors duration-300 ${step === 'details' || step === 'datetime' || step === 'review' || step === 'success' ? 'bg-brand-600 border-brand-600 text-white' : 'bg-stone-900 border-stone-600 text-stone-500'}`}>1</div>
                  <div>
                    <div className={`font-bold text-sm ${step === 'details' ? 'text-white' : 'text-stone-400'}`}>Personal Details</div>
                    <div className="text-xs text-stone-500 mt-0.5">Your contact info</div>
                  </div>
                </div>
                
                <div className={`flex gap-4 items-start relative z-10`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border transition-colors duration-300 ${step === 'datetime' || step === 'review' || step === 'success' ? 'bg-brand-600 border-brand-600 text-white' : 'bg-stone-900 border-stone-600 text-stone-500'}`}>2</div>
                  <div>
                     <div className={`font-bold text-sm ${step === 'datetime' ? 'text-white' : 'text-stone-400'}`}>Interview Date</div>
                     <div className="text-xs text-stone-500 mt-0.5">Pick a slot</div>
                  </div>
                </div>
                
                <div className={`flex gap-4 items-start relative z-10`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border transition-colors duration-300 ${step === 'review' || step === 'success' ? 'bg-brand-600 border-brand-600 text-white' : 'bg-stone-900 border-stone-600 text-stone-500'}`}>3</div>
                  <div>
                    <div className={`font-bold text-sm ${step === 'review' ? 'text-white' : 'text-stone-400'}`}>Confirmation</div>
                    <div className="text-xs text-stone-500 mt-0.5">Review & Submit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Steps */}
          <div className="lg:col-span-3">
             {step === 'success' ? renderSuccess() : (
               <>
                 {step === 'details' && renderDetails()}
                 {step === 'datetime' && renderDateTime()}
                 {step === 'review' && renderReview()}
               </>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;