const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const appliedRoutes = require('./routes/appliedRoute'); 
const connectionsRoutes = require('./routes/connectionsRoute');

const authRoutes = require('./routes/authRoute');
const eventRoutes = require('./routes/eventRoute');
const userRoutes = require('./routes/usersRoute');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/connections', connectionsRoutes);
app.use('/api/applied', appliedRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
