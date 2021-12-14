import mongoose from 'mongoose';

const DatabaseConfig = async () => {
  try {
    mongoose.connect(`${process.env.DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect database successfully!');
  } catch (error) {
    console.error('Error: ', error);
  }
};

export default DatabaseConfig;
