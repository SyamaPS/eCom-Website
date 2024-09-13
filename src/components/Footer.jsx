import React from 'react';

const Footer = () => (
  <footer style={{ padding: '16px', backgroundColor: '#F8F8F8', color: '#333', textAlign: 'center', height: '300px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', height: '100%' }}>
      {/* Links Section */}
      <div style={{ flex: 1 }}>
        <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>Links</h4>
        <a href="/" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '4px' }}>Home</a>
        <a href="/about" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '4px' }}>About</a>
        <a href="/contact" style={{ display: 'block', color: '#333', textDecoration: 'none' }}>Contact</a>
      </div>

      {/* Help Section */}
      <div style={{ flex: 1 }}>
        <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>Help</h4>
        <a href="/faq" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '4px' }}>FAQ</a>
        <a href="/support" style={{ display: 'block', color: '#333', textDecoration: 'none' }}>Support</a>
      </div>

      {/* Newsletter Section */}
      <div style={{ flex: 2 }}>
        <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>Newsletter</h4>
        <input type="email" placeholder="Enter your email" style={{ padding: '8px', border: '1px solid #CCC', borderRadius: '4px', marginRight: '8px' }} />
        <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#4A5568', color: '#FFFFFF', cursor: 'pointer' }}>Subscribe</button>
      </div>

      {/* Payment Options Section */}
      <div style={{ flex: 1 }}>
        <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>Payment Options</h4>
        <p style={{ color: '#333' }}>Visa, MasterCard, PayPal</p>
      </div>
    </div>

    {/* Footer Bottom Text */}
    <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
      <p>&copy; 2024 eCommerce Website. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
