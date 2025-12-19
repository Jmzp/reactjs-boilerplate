import { useNavigate } from 'react-router-dom';
import { Box, Card, Typography, Button, Divider } from '@mui/material';
import { LogoutOutlined, PersonOutline, VerifiedUser } from '@mui/icons-material';
import { observer } from 'mobx-react';
import { authStore } from '../../../auth';
import * as styles from './HomePage.styles.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authStore.logout();
    navigate('/login');
  };

  return (
    <Box className={styles.container}>
      <Card className={styles.card} elevation={0}>
        <Box className={styles.userAvatar}>
          <PersonOutline sx={{ fontSize: 50, color: 'white' }} />
        </Box>

        <Box className={styles.iconContainer}>
          <VerifiedUser sx={{ fontSize: 32, color: '#11998e' }} />
        </Box>

        <Typography variant="h4" className={styles.title}>
          ¡Bienvenido!
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Has iniciado sesión correctamente
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
          Sesión activa como:
        </Typography>
        <Typography className={styles.email}>{authStore.user?.email}</Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<LogoutOutlined />}
          onClick={handleLogout}
          fullWidth
          sx={{
            borderRadius: '12px',
            padding: '14px',
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'none',
            background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
            boxShadow: '0 10px 30px rgba(255, 65, 108, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #e63a5f 0%, #e64327 100%)',
              boxShadow: '0 15px 35px rgba(255, 65, 108, 0.5)',
            },
          }}
        >
          Cerrar Sesión
        </Button>
      </Card>
    </Box>
  );
};

export default observer(HomePage);
