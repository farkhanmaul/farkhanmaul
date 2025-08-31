'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import { FiX, FiExternalLink } from 'react-icons/fi';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * About Modal Component - berdasarkan referensi website about page
 * Modal popup dengan informasi detail tentang developer
 */
export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 40
            }}
          />

          {/* Modal */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={onClose}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '600px',
                backgroundColor: '#1e293b',
                borderRadius: '16px',
                border: '2px solid #22d3ee',
                position: 'relative'
              }}
            >
              {/* Header */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '60px',
                  padding: '16px',
                  borderBottom: '1px solid #374151',
                  backgroundColor: '#1e293b',
                  borderRadius: '14px 14px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <h2 style={{ color: '#22d3ee', fontSize: '24px', fontWeight: 'bold' }}>
                  About Me
                </h2>
                <button
                  onClick={onClose}
                  style={{
                    color: '#22d3ee',
                    backgroundColor: 'transparent',
                    border: '2px solid #22d3ee',
                    borderRadius: '50%',
                    padding: '8px',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content */}
              <div 
                style={{
                  position: 'absolute',
                  top: '60px',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  overflowY: 'scroll',
                  padding: '16px',
                  color: 'white'
                }}
              >
                <h3 style={{ marginBottom: '16px', color: '#22d3ee' }}>SCROLL TEST</h3>
                
                <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                  <p>Content Block 1 - TOP</p>
                </div>
                
                <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                  <p>Content Block 2</p>
                </div>
                
                <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                  <p>Content Block 3</p>
                </div>
                
                <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                  <p>Content Block 4</p>
                </div>
                
                <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                  <p>Content Block 5 - BOTTOM - Jika kamu bisa lihat ini, scroll BEKERJA!</p>
                </div>
                
                <div style={{ height: '200px', backgroundColor: '#22d3ee', marginBottom: '16px', padding: '16px', borderRadius: '8px', color: 'black' }}>
                  <p><strong>FINAL TEST - Jika area cyan ini terlihat, scroll 100% berfungsi!</strong></p>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
}