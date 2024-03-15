import mongoose from 'mongoose';

export const initMongo = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) return;

    console.log('⚒ Connecting in DB...');
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log('✨ DB connected.');
  } catch (err) {
    console.log('✖ DB not connected.');
  }
};
