import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: 'mongodb+srv://testUser:!Welcome!@cluster0.e01vuzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
}));
