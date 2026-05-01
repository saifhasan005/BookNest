import React from 'react';

const services = [
    {
        id: 1,
        icon: '🚚',
        title: 'Free Delivery',
        description: 'Free shipping on all orders above $30. Get your books delivered right to your doorstep.'
    },
    {
        id: 2,
        icon: '🔄',
        title: 'Easy Returns',
        description: 'Not satisfied? Return within 7 days, no questions asked. Hassle-free return policy.'
    },
    {
        id: 3,
        icon: '🔒',
        title: 'Secure Payment',
        description: 'Your payment information is safe with us. We use industry-standard encryption.'
    },
    {
        id: 4,
        icon: '🎧',
        title: '24/7 Support',
        description: 'Our support team is always here to help you with any queries or concerns.'
    },
];

const Services = () => {
    return (
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='text-center mb-10'>
                <h2 className='text-3xl font-bold text-gray-800 '>Why Choose BookNest?</h2>
                <p className='text-gray-500 mt-2 '>We make your book buying experience simple and enjoyable</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {services.map(service => (
                    <div
                        key={service.id}
                        className='flex flex-col items-center text-center p-6 rounded-2xl shadow hover:shadow-md transition-shadow bg-white'>
                        <span className='text-5xl mb-4'>{service.icon}</span>
                        <h3 className='text-lg font-semibold text-gray-800 mb-2'>{service.title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed'>{service.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Services;