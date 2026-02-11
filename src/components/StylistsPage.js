import React from 'react';
import StylistCard from './StylistCard';
import './Stylists.css';
import image1 from '../assets/expert_pro_plus.jpg';
import image2 from '../assets/expert_pro.jpg';
import image3 from '../assets/expert_noob.jpg';
import image4 from '../assets/team_photo.jpg';



const stylistsData = [
  {
    id: 1,
    name: 'Sushila Prajapati',
    role: 'Senior Makeup & Hair Expert',
    bio: 'Specializing in modern fades, classic cuts, and glowing Makeup. Sushila provides you luxury salon experience.',
    imageUrl: image1,
    instagramUrl: 'https://www.instagram.com/p/CoeksdDvm5Q/?igsh=c3N5eTNudTRob2Jv',
  },
  {
    id: 2,
    name: 'Rajni Prajapati',
    role: 'Master Stylist & Makeup Expert',
    bio: 'Rajni has 5+ years of experience in creative hairstyles and signature makeup. She loves making clients feel brand new.',
    imageUrl: image2,
    instagramUrl: 'https://www.instagram.com/p/CoeksdDvm5Q/?igsh=c3N5eTNudTRob2Jv',
  },
  {
    id: 3,
    name: 'Nisha Prajapati',
    role: 'Role for USP',
    bio: 'Nisha makes engage with all clients for better experience. Her passion is making your special day absolutely perfect.',
    imageUrl: image3,
    instagramUrl: 'https://www.instagram.com/p/CoeksdDvm5Q/?igsh=c3N5eTNudTRob2Jv',
  },
  {
    id: 4,
    name: 'Team',
    role: 'Main Members',
    bio: 'Three Member of our Beauty Team..',
    imageUrl: image4,
    instagramUrl: 'https://www.instagram.com/p/CoeksdDvm5Q/?igsh=c3N5eTNudTRob2Jv',
  },
];

function StylistsPage() {
  return (
    <div className="stylists-page">
      <h1 className="stylists-page-title">Meet Our Experts</h1>
      <p className="stylists-page-subtitle">
        Talented professionals dedicated to your style and well-being.
      </p>

      {/* 2. This container will hold all your stylist cards */}
      <div className="stylists-container">
        {stylistsData.map((stylist) => (
          <StylistCard key={stylist.id} stylist={stylist} />
        ))}
      </div>
    </div>
  );
}

export default StylistsPage;