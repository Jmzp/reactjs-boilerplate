import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
  IconButton,
  Alert,
} from '@mui/material';
import {
  LockOutlined,
  EmailOutlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { observer } from 'mobx-react';
import { authStore } from '../../stores';
import * as styles from './LoginPage.styles.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor ingresa email y contraseña');
      return;
    }

    const success = await authStore.login(email, password);
    if (success) {
      navigate('/home');
    }
  };

  return (
    <Box className={styles.container}>
      <Card className={styles.formCard} elevation={0}>
        <Box className={styles.logoContainer}>
          <Box className={styles.logo}>
            <LockOutlined sx={{ fontSize: 40, color: 'white' }} />
          </Box>
        </Box>

        <Typography variant="h4" className={styles.title}>
          Bienvenido
        </Typography>
        <Typography variant="body2" className={styles.subtitle}>
          Ingresa tus credenciales para continuar
        </Typography>

        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined sx={{ color: '#9ca3af' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: '#f9fafb',
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                },
                '&.Mui-focused': {
                  backgroundColor: 'white',
                },
              },
            }}
          />
          <TextField
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined sx={{ color: '#9ca3af' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: '#9ca3af' }} />
                    ) : (
                      <Visibility sx={{ color: '#9ca3af' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: '#f9fafb',
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                },
                '&.Mui-focused': {
                  backgroundColor: 'white',
                },
              },
            }}
          />

          {error && (
            <Alert severity="error" sx={{ borderRadius: '12px' }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={authStore.isLoading}
            fullWidth
            sx={{
              borderRadius: '12px',
              padding: '14px',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.5)',
              },
              '&:disabled': {
                background: '#e5e7eb',
              },
            }}
          >
            {authStore.isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Iniciar Sesión'
            )}
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default observer(LoginPage);
