'use client'
import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className=' bg-blue-100 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-5xl mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-gray-800'>Contact Us</h1>
                    <p className='text-gray-500 mt-3'>Have a question? Wed love to hear from you.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-5'>
                        <div className='bg-white rounded-2xl shadow p-6 flex items-start gap-4'>
                            <span className='text-3xl'>📍</span>
                            <div>
                                <h3 className='font-semibold text-gray-800'>Address</h3>
                                <p className='text-gray-500 text-sm mt-1'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow p-6 flex items-start gap-4'>
                            <span className='text-3xl'>📧</span>
                            <div>
                                <h3 className='font-semibold text-gray-800'>Email</h3>
                                <p className='text-gray-500 text-sm mt-1'>support@booknest.com</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow p-6 flex items-start gap-4'>
                            <span className='text-3xl'>📞</span>
                            <div>
                                <h3 className='font-semibold text-gray-800'>Phone</h3>
                                <p className='text-gray-500 text-sm mt-1'>+880 1234 567890</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow p-6 flex items-start gap-4'>
                            <span className='text-3xl'>🕐</span>
                            <div>
                                <h3 className='font-semibold text-gray-800'>Working Hours</h3>
                                <p className='text-gray-500 text-sm mt-1'>Sat – Thu: 9AM – 6PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2 bg-white rounded-2xl shadow p-8'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Get Into Touch</h2>
                        <div className='flex flex-col gap-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='text-sm font-medium text-gray-700 mb-1 block'>
                                        Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Your name'
                                        className='input input-bordered w-full'
                                    />
                                </div>
                                <div>
                                    <label className='text-sm font-medium text-gray-700 mb-1 block'>
                                        Email <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='your@email.com'
                                        className='input input-bordered w-full'
                                    />
                                </div>
                            </div>

                            <div>
                                <label className='text-sm font-medium text-gray-700 mb-1 block'>Subject</label>
                                <input
                                    type='text'
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder='What is this about?'
                                    className='input input-bordered w-full'
                                />
                            </div>

                            <div>
                                <label className='text-sm font-medium text-gray-700 mb-1 block'>
                                    Message <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Write your message here...'
                                    rows={5}
                                    className='textarea textarea-bordered w-full resize-none'
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className='btn btn-primary w-full sm:w-auto self-end px-8'>
                                Send Message 🚀
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;