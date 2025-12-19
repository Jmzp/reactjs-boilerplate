import { style, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.95)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const pulse = keyframes({
  '0%, 100%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.05)' },
});

const gradientShift = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '24px',
  background: 'linear-gradient(-45deg, #11998e, #38ef7d, #00b09b, #96c93d)',
  backgroundSize: '400% 400%',
  animation: `${gradientShift} 15s ease infinite`,
});

export const card = style({
  padding: '60px 48px',
  textAlign: 'center',
  maxWidth: '480px',
  borderRadius: '24px',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  animation: `${fadeIn} 0.6s ease-out`,
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
});

export const iconContainer = style({
  marginBottom: '24px',
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const title = style({
  marginBottom: '8px',
  fontWeight: 700,
  background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const subtitle = style({
  marginBottom: '8px',
  color: '#6b7280',
});

export const email = style({
  marginBottom: '40px',
  color: '#1a1a2e',
  fontWeight: 600,
  fontSize: '18px',
});

export const userAvatar = style({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  boxShadow: '0 10px 30px rgba(17, 153, 142, 0.4)',
});
