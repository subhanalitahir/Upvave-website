import React, { useEffect, useState } from 'react';
import Confettie from 'react-confetti'
// The main App component containing the complete footer
const SecondApp = () => {
//   const primaryColor = '#a855f7'; // A purple color for the logo and icons
  const secondaryColor = '#e2e8f0'; // A light gray for text
  const [show,setShow] = useState(false);
  // Helper component to render SVG icons
  const Icon = ({ path, className, size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d={path} />
    </svg>
  );

  // SVG path data for icons
  const iconPaths = {
    home: "M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z",
    link: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71",
    user: "M12 4a4 4 0 100 8 4 4 0 000-8zm-6 9a6 6 0 00-6 6v1h24v-1a6 6 0 00-6-6H6z",
    briefcase: "M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z",
    blogger: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H8c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2zm6-6h-4V8h4v3z",
    phone: "M20 15.5c-1.2 0-2.4-.2-3.6-.6-.6-.2-1.2 0-1.7.5l-2.7 2.7c-3.9-2.3-7.2-5.6-9.5-9.5l2.7-2.7c.5-.5.7-1.1.5-1.7-.4-1.2-.6-2.4-.6-3.6 0-.6-.5-1-1-1H3c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-4.5c0-.5-.4-1-1-1z",
    envelope: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    mapMarker: "M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z",
    linkedin: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8 10v7h4v-7H8zm0-3a2 2 10 014 0 2 2 0 01-4 0zM14 10v7h4v-7h-4z",
    instagram: "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm1.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z",
    facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z",
    xTwitter: "M18.244 2.25h3.308l-7.227 8.261 7.227 8.257H15.02L8.528 10.39zM17.03 21h3.308l-9.157-12.871L5.59 21H2.282l8.365-11.758L2.015 2.25h3.308l6.07 8.544z",
    pinterest: "M12 2C6.48 2 2 6.48 2 12c0 4.2 2.65 7.78 6.3 9.25-.03-.24-.05-.49-.05-.75 0-1.3.4-2.5 1.1-3.6-.2-.3-.4-.7-.4-1.2 0-.8.5-1.5 1.2-1.9.7-.4 1.5-.6 2.4-.6 1.3 0 2.4.6 3.1 1.6.8 1 1.2 2.2 1.2 3.5 0 2.2-1.5 4-3.5 4-1.8 0-3.3-1.1-3.3-3.2 0-1.2.7-2.2 1.7-2.8.3-.2.6-.3 1-.3.5 0 1 .2 1.3.5.5.6.8 1.4.8 2.3 0 .8-.3 1.5-.7 2-.5.5-1.1.8-1.8.8-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.8 0-.9.2-1.7.6-2.4l.2-.3c.4-.6.8-1.2 1.2-1.8.6-.9 1-2.1 1-3.4 0-1.4-.5-2.6-1.5-3.5-1-.9-2.2-1.4-3.6-1.4-1.4 0-2.6.5-3.6 1.5-1 .9-2.2 1.4-3.6 1.4z",
    discord: "M20.9 2.9c-2-2-4.5-2.9-7-2.9-2.5 0-5 .9-7 2.9-2 2-2.9 4.5-2.9 7 0 2.5.9 5 2.9 7l.2.2c2.1 2.1 4.9 3.1 7.8 3.1h.4c2.9 0 5.7-1 7.8-3.1l.2-.2c2-2 2.9-4.5 2.9-7s-.9-5-2.9-7zm-4.3 12c-.5.5-.9.9-1.3 1.3-.4.4-.8.7-1.2 1-.6.3-1.3.4-2 .4-1 0-1.9-.3-2.6-.9-.7-.6-1.1-1.4-1.1-2.4 0-.8.2-1.4.5-1.9.4-.5.8-.9 1.3-1.3.5-.5.9-.9 1.2-1.2.4-.4.8-.7 1.2-1 .6-.3 1.3-.4 2-.4 1 0 1.9.3 2.6.9.7.6 1.1 1.4 1.1 2.4 0 .8-.2 1.4-.5 1.9-.4.5-.8.9-1.3 1.3zm-6-4.3c.5-.5.9-.9 1.3-1.3.4-.4.8-.7 1.2-1 .6-.3 1.3-.4 2-.4 1 0 1.9.3 2.6.9.7.6 1.1 1.4 1.1 2.4 0 .8-.2 1.4-.5 1.9-.4.5-.8.9-1.3 1.3-1.2 1.2-2.8 1.8-4.5 1.8-1.7 0-3.3-.6-4.5-1.8-.4-.4-.8-.8-1.3-1.3-.5-.5-.9-.9-1.2-1.2-.4-.4-.7-.8-1-1.2-.3-.4-.4-.8-.4-1.2 0-.8.2-1.4.5-1.9.4-.5.8-.9 1.3-1.3.5-.5.9-.9 1.2-1.2.4-.4.7-.8 1-1.2.3-.4.4-.8.4-1.2 0-.8-.2-1.4-.5-1.9-.4-.5-.8-.9-1.3-1.3-.5-.5-.9-.9-1.2-1.2-.4-.4-.7-.8-1-1.2-.3-.4-.4-.8-.4-1.2 0-.8.2-1.4.5-1.9.4-.5.8-.9 1.3-1.3.5-.5.9-.9 1.2-1.2.4-.4.7-.8 1-1.2.3-.4.4-.8.4-1.2z"
  };

  const footerLinks = [
    { title: 'Quick Links', links: [
      { name: 'Home', icon: 'home', href: '#' },
      { name: 'Portfolio', icon: 'link', href: '#' },
      { name: 'About', icon: 'user', href: '#' },
      { name: 'Careers', icon: 'briefcase', href: '#' },
      { name: 'Blogs', icon: 'blogger', href: '#' },
    ]},
    { title: 'Services', links: [
      { name: 'Web Development', icon: 'link', href: '#' },
      { name: 'Mobile Apps Development', icon: 'link', href: '#' },
      { name: 'E-commerce Solutions', icon: 'link', href: '#' },
      { name: 'Custom Software Development', icon: 'link', href: '#' },
      { name: 'DevOps Services', icon: 'link', href: '#' },
      { name: 'Artificial Intelligence', icon: 'link', href: '#' },
      { name: 'Digital Marketing', icon: 'link', href: '#' },
    ]},
    { title: 'Company', links: [
      { name: '+923253918621', icon: 'phone', href: 'tel:+923253918621' },
      { name: 'contact@maldev.net', icon: 'envelope', href: 'mailto:contact@maldev.net' },
      { name: 'C-II Block Phase 1 Johar Town, Lahore, Punjab 54770', icon: 'mapMarker', href: '#' },
    ]},
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'X', icon: 'xTwitter', href: '#' },
    { name: 'Pinterest', icon: 'pinterest', href: '#' },
    { name: 'Discord', icon: 'discord', href: '#' },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => (
      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full transition-transform hover:scale-110" style={{ color: secondaryColor }}>
        <Icon path={iconPaths[link.icon]} size={20} />
      </a>
    ));
  };
  const confettieMaker=()=>{
    const container = document.querySelector(".confettie");
    container.addEventListener('mouseover',function(){
         // Trigger confetti after 1 second
    setTimeout(() => setShow(true), 1000);

    // Stop confetti after 5 seconds
    setTimeout(() => setShow(false), 6000);
    })
  }
  return (
    <section className='mt-[23rem]'>
        <div className="bg-gray-900 text-gray-300 p-8 md:p-12 lg:p-16 font-sans">
            {show&&Confettie}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {/* Logo and Social Media Section */}
              <div className="flex flex-col items-start space-y-4">
                <div className="p-4 border border-purple-500 rounded-lg cursor-pointer confettie">
                  <h1 className="text-3xl font-bold">
                    <span className="text-purple-500">UP</span>vave
                  </h1>
                  <p className="text-sm font-light text-gray-400">Your Ideas, Our Creations.</p>
                </div>
                <div className="flex space-x-4">
                  {renderSocialLinks()}
                </div>
              </div>
              {/* Links Sections */}
              {footerLinks.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="flex items-center text-gray-400 hover:text-purple-500 transition-colors duration-300">
                        {link.icon && <Icon path={iconPaths[link.icon]} className="mr-3" />}
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Copyright Section */}
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
              <p>Copyright © 2025 <span className="text-purple-500 font-bold">UPvave</span> All right reserved.</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SecondApp;
