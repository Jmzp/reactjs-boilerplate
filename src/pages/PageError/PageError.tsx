import { Typography } from '@mui/material';
import strings from '../../localization';
import * as styles from './PageError.styles.css';

const PageError = () => (
  <div className={styles.page}>
    <Typography variant="h5">{strings.errors.pageNotFound}</Typography>
  </div>
);

export default PageError;
