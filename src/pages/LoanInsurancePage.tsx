import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { bankPartners, insurancePartners } from '../lib/mockData';
import { Calculator, CreditCard, Shield, CheckCircle } from 'lucide-react';

export function LoanInsurancePage() {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'loan',
  });

  // EMI Calculation
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - loanAmount;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our team will contact you within 24 hours.');
    setContactForm({ name: '', email: '', phone: '', service: 'loan' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-[#0A2342] dark:text-white">Loan & Insurance Services</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get instant loan approvals and comprehensive insurance coverage from our trusted partners
          </p>
        </div>

        <Tabs defaultValue="loan" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="loan" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Car Loan
            </TabsTrigger>
            <TabsTrigger value="insurance" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Insurance
            </TabsTrigger>
          </TabsList>

          {/* Loan Tab */}
          <TabsContent value="loan">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* EMI Calculator */}
              <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="h-6 w-6 text-[#0A2342] dark:text-[#FFD700]" />
                  <h2 className="text-[#0A2342] dark:text-white">EMI Calculator</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="mt-2"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      ₹ {(loanAmount / 100000).toFixed(2)} Lakh
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                    <Input
                      id="tenure"
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-br from-[#0A2342] to-[#1a4d7a] text-white p-6 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-300 text-sm">Monthly EMI</p>
                        <p className="text-3xl">₹ {Math.round(emi).toLocaleString('en-IN')}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                        <div>
                          <p className="text-gray-300 text-sm">Principal Amount</p>
                          <p className="text-xl">₹ {loanAmount.toLocaleString('en-IN')}</p>
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">Total Interest</p>
                          <p className="text-xl">₹ {Math.round(totalInterest).toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-300 text-sm">Total Amount Payable</p>
                        <p className="text-2xl">₹ {Math.round(totalAmount).toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Loan Features */}
              <div className="space-y-6">
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Why Choose Our Car Loans?</h3>
                  <ul className="space-y-3">
                    {[
                      'Interest rates starting from 7.5% p.a.',
                      'Loan amount up to 100% of car value',
                      'Flexible tenure from 1 to 7 years',
                      'Quick approval within 24 hours',
                      'Minimal documentation required',
                      'No hidden charges or processing fees',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Bank Partners */}
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Our Banking Partners</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {bankPartners.map((bank, index) => (
                      <div
                        key={index}
                        className="p-3 border border-gray-200 dark:border-slate-700 rounded-lg text-center text-gray-700 dark:text-gray-300"
                      >
                        {bank}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Insurance Tab */}
          <TabsContent value="insurance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Insurance Types */}
              <div className="space-y-6">
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Comprehensive Coverage</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Protect your car with our comprehensive insurance plans covering all aspects of your vehicle.
                  </p>
                  <ul className="space-y-3">
                    {[
                      { title: 'Third-Party Insurance', desc: 'Mandatory legal coverage for third-party damages' },
                      { title: 'Comprehensive Insurance', desc: 'Complete protection including own damage coverage' },
                      { title: 'Zero Depreciation', desc: 'Get full claim amount without depreciation' },
                      { title: 'Personal Accident Cover', desc: 'Financial protection for driver and passengers' },
                    ].map((plan, index) => (
                      <li key={index} className="pb-3 border-b border-gray-200 dark:border-slate-700 last:border-0">
                        <div className="flex items-start gap-2">
                          <Shield className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-gray-900 dark:text-white">{plan.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{plan.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Insurance Partners */}
                <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="mb-4 text-[#0A2342] dark:text-white">Insurance Partners</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {insurancePartners.map((company, index) => (
                      <div
                        key={index}
                        className="p-3 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-300 text-center"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Benefits */}
              <Card className="p-6 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h3 className="mb-4 text-[#0A2342] dark:text-white">Insurance Benefits</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Instant Policy Issuance', desc: 'Get your insurance policy issued immediately online' },
                    { title: 'Cashless Claims', desc: 'Network of 4500+ cashless garages across India' },
                    { title: 'Quick Claim Settlement', desc: 'Fast and hassle-free claim processing' },
                    { title: '24/7 Roadside Assistance', desc: 'Round-the-clock support wherever you are' },
                    { title: 'No Claim Bonus', desc: 'Earn discounts for claim-free years' },
                    { title: 'Add-On Covers', desc: 'Customize your policy with additional riders' },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-slate-700 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-[#0A2342] dark:text-[#FFD700]" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto mt-12 p-8 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <h2 className="mb-6 text-center text-[#0A2342] dark:text-white">Apply Now</h2>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="service">Service Type</Label>
              <select
                id="service"
                value={contactForm.service}
                onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900"
              >
                <option value="loan">Car Loan</option>
                <option value="insurance">Car Insurance</option>
                <option value="both">Both Loan & Insurance</option>
              </select>
            </div>
            <Button type="submit" className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A2342]">
              Submit Application
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
