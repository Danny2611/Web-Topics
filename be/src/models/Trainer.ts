import mongoose, { Document, Schema } from 'mongoose';

export interface ITrainer extends Document {
  image?: string;
  name: string;
  bio?: string;
  specialization?: string;
  experience?: number;
  phone?: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

const trainerSchema: Schema = new Schema({
  image: String,
  name: { type: String, required: true },
  bio: String,
  specialization: String,
  experience: Number,
  phone: String,
  email: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model<ITrainer>('Trainer', trainerSchema);