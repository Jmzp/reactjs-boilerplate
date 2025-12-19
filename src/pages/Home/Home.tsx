import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { observer } from 'mobx-react';
import * as styles from './Home.styles.css';

export const Home = () => {
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Username</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell className={styles.myLabel}>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Jacob</TableCell>
            <TableCell>Thornton</TableCell>
            <TableCell>@fat</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell colSpan={2}>Larry the Bird</TableCell>
            <TableCell>@twitter</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default observer(Home);
