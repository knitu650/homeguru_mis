import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import AuthLayout from '@components/layout/AuthLayout';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import Alert from '@components/common/Alert';
import { FiMail, FiLock } from 'react-icons/fi';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit}>
        {error && <Alert variant="error" message={error} style={{ marginBottom: '1rem' }} />}
        
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          icon={<FiMail />}
          required
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          icon={<FiLock />}
          required
        />

        <div style={{ marginTop: '1.5rem' }}>
          <Button type="submit" fullWidth loading={loading}>
            Sign In
          </Button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="#" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary-600)' }}>
            Forgot Password?
          </a>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
