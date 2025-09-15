import React from 'react';
import User from '../Contributer/User.js';
import './Profile.css';

const Profile = () => {
  return (
    <div style={{ padding: '2rem', background: '#f7f9fa', minHeight: '100vh' }}>
      <h2 id='profileHeading' style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        Profiles of Contributors
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {User.map((item) => (
          <div
            className="container"
            key={item.github_username}
            style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              padding: '2rem',
              maxWidth: '320px',
              textAlign: 'center',
              transition: 'transform 0.2s',
            }}
          >
            <img
              src={`https://avatars.githubusercontent.com/${item.github_username}`}
              alt={item.name}
              height={120}
              width={120}
              style={{
                borderRadius: '50%',
                marginBottom: '1rem',
                border: '3px solid #e1e4e8',
                objectFit: 'cover'
              }}
            />
            <h3 className="id" style={{ margin: '0.5rem 0', color: '#0077b6' }}>
              {item.name}
            </h3>
            <p className="description" style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem' }}>
              {item.about}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a
                href={item.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#0a66c2',
                  color: '#fff',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'background 0.2s'
                }}
              >
                LinkedIn
              </a>
              <a
                href={`https://github.com/${item.github_username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#24292e',
                  color: '#fff',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'background 0.2s'
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
