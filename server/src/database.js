import mongoose from 'mongoose';

const DatabaseConfig = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE}`);
    console.log('Connect database successfully!');
  } catch (error) {
    console.error('Error: ', error);
  }
};

export default DatabaseConfig;
